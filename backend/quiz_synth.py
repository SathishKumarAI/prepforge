"""Multiple-choice quizzes synthesised from cards with no LLM.

Owns: the TF-IDF vectors over a card set, the three quiz shapes (cloze, true /
false, spot-the-wrong-statement), and `_add_synthetic_quizzes`, which gives
every card that lacks a quiz the best one it can make. Zero tokens, so it runs
on every ingest. Does NOT own parsing (ingest.py) or what counts as a
question (hygiene.py).
"""
from __future__ import annotations

import hashlib
import logging
import math
import re
from collections import Counter

from ingest_words import STOPWORDS, _LEAD_NUM, _QTOKEN

log = logging.getLogger("ingest")


def _first_sentence(text: str, cap: int = 160) -> str:
    """A short, quiz-friendly gloss: first sentence of an answer, stripped of markdown."""
    plain = re.sub(r"[#*`>_~\[\]()]", "", text).replace("\n", " ").strip()
    m = re.search(r"(.+?[.!?])(\s|$)", plain)
    s = (m.group(1) if m else plain).strip()
    return (s[: cap - 1] + "…") if len(s) > cap else s


# ---- lightweight TF-IDF over the card set: near-miss distractors *and* keywords ----
def _card_tokens(card: dict) -> list[str]:
    text = (card.get("question", "") + " " + _first_sentence(card.get("answer", ""), 200)).lower()
    toks = [t for t in _QTOKEN.findall(text) if t not in STOPWORDS and len(t) > 2]
    for tag in card.get("tags", []) or []:
        t = str(tag).lower()
        if len(t) > 2:
            toks += [t, t, t]  # tags carry strong topical signal
    return toks


def _build_vectors(cards: list[dict]) -> tuple[dict, dict]:
    """TF-IDF sparse vectors + norms keyed by card id (pure Python, no deps)."""
    import math
    from collections import Counter

    docs = [(c["id"], _card_tokens(c)) for c in cards]
    n = len(docs)
    df: Counter = Counter()
    for _, toks in docs:
        for term in set(toks):
            df[term] += 1
    idf = {term: math.log(n / (1 + freq)) + 1.0 for term, freq in df.items()}
    vec: dict[str, dict[str, float]] = {}
    norm: dict[str, float] = {}
    for cid, toks in docs:
        if not toks:
            vec[cid], norm[cid] = {}, 1e-9
            continue
        tf = Counter(toks)
        v = {term: (freq / len(toks)) * idf.get(term, 0.0) for term, freq in tf.items()}
        vec[cid] = v
        norm[cid] = math.sqrt(sum(w * w for w in v.values())) or 1e-9
    return vec, norm


def _similarity(a: str, b: str, vec: dict, norm: dict) -> float:
    va, vb = vec.get(a, {}), vec.get(b, {})
    small, big = (va, vb) if len(va) <= len(vb) else (vb, va)
    dot = sum(w * big.get(term, 0.0) for term, w in small.items())
    return dot / (norm.get(a, 1e-9) * norm.get(b, 1e-9))


def _cloze(card: dict, h: int) -> tuple[str, str] | None:
    """Turn the gloss into a fill-in-the-blank: (prompt_with_blank, answer_term).
    Blanks the most salient token (longest content word, tags preferred)."""
    gloss = _first_sentence(card.get("answer", ""))
    words = re.findall(r"[A-Za-z][A-Za-z0-9+#.-]{2,}", gloss)
    tagset = {str(t).lower() for t in card.get("tags", []) or []}
    cands = [w for w in words if w.lower() not in STOPWORDS and len(w) > 3]
    if not cands:
        return None
    # prefer a word that is also a tag (topical), else the longest word — stable pick
    tagged = [w for w in cands if w.lower() in tagset]
    pool = tagged or cands
    term = sorted(pool, key=lambda w: (-len(w), w))[h % len(pool)] if pool else None
    if not term:
        return None
    prompt = re.sub(r"\b" + re.escape(term) + r"\b", "_____", gloss, count=1)
    if "_____" not in prompt:
        return None
    return prompt, term



# ---- is this a question at all? -------------------------------------------

# A section number in front of a question is the document's outline leaking
# into the card: "10).What are the Control Flow activities…", "2.6 What do you
# think…", "15). Difference between…". `_LEAD_NUM` above only stripped a number
# followed by a delimiter AND a space, which is why 57 of these survived.
#
# A BARE number is deliberately left alone — "5 Whys analysis?" is a question
# and the 5 is part of it. Stripping needs either a delimiter after the number


def _subject(card: dict) -> str:
    """The thing a card is about — its heading, minus the 'Explain:' scaffolding."""
    q = (card.get("question", "") or "").strip()
    q = re.sub(r"^(explain|describe|what is|define)\b[:\s]*", "", q, flags=re.IGNORECASE)
    return q.rstrip("?").strip()


def _cloze_quiz(card: dict, ranked: list[dict], h: int, correct_index: int) -> dict | None:
    cz = _cloze(card, h)
    if not cz:
        return None
    prompt, term = cz
    wrongs: list[str] = []
    for o in ranked:
        for t in (o.get("tags", []) or []):
            ts = str(t)
            if ts.lower() != term.lower() and ts not in wrongs and len(ts) > 3:
                wrongs.append(ts)
                break
        if len(wrongs) == 3:
            break
    if len(wrongs) < 3:
        return None
    choices = wrongs[:]
    choices.insert(correct_index, term)
    return {"choices": choices, "correctIndex": correct_index, "kind": "cloze", "prompt": prompt}


def _true_false_quiz(card: dict, ranked: list[dict], h: int) -> dict | None:
    """True/false by *construction*, so the label is always right with no model:
    pair the subject with its own gloss (true) or a dissimilar card's gloss (false)."""
    subject = _subject(card)
    own = _first_sentence(card.get("answer", ""))
    if len(subject) < 3 or len(own) < 20:
        return None
    if h % 2 == 0:  # TRUE statement
        return {"choices": ["True", "False"], "correctIndex": 0, "kind": "truefalse",
                "prompt": f"True or false — “{subject}” can be described as: {own}"}
    # FALSE statement: borrow a *least*-similar card's gloss (reliably a different concept)
    for o in reversed(ranked):
        g = _first_sentence(o.get("answer", ""))
        if len(g) >= 20 and g != own:
            return {"choices": ["True", "False"], "correctIndex": 1, "kind": "truefalse",
                    "prompt": f"True or false — “{subject}” can be described as: {g}"}
    return None


def _spot_wrong_quiz(card: dict, ranked: list[dict], h: int, wrong_index: int) -> dict | None:
    """"Which statement is wrong?" — 3 cards paired with their own gloss (true) plus
    one card paired with a mismatched gloss (false); the answer is the false one."""
    subjects = [(card, own) for own in [_first_sentence(card.get("answer", ""))] if len(own) >= 20]
    if not subjects:
        return None
    picks = [card]
    for o in ranked:
        if len(_first_sentence(o.get("answer", ""))) >= 20:
            picks.append(o)
        if len(picks) == 4:
            break
    if len(picks) < 4:
        return None
    stmts: list[str] = []
    for idx, c in enumerate(picks):
        subj = _subject(c)
        if not subj:
            return None
        if idx == wrong_index:
            # mismatch: pair this subject with a different pick's gloss → false
            donor = picks[(idx + 1) % len(picks)]
            gloss = _first_sentence(donor.get("answer", ""))
        else:
            gloss = _first_sentence(c.get("answer", ""))
        stmts.append(f"{subj}: {gloss}")
    if len(set(stmts)) < 4:
        return None
    return {"choices": stmts, "correctIndex": wrong_index, "kind": "spotwrong",
            "prompt": "Which statement is INCORRECT?"}


def _synthesize_quiz(card: dict, others: list[dict], vec: dict, norm: dict) -> dict | None:
    """Zero-token quiz for a card that has none. Deterministic (seeded by card id),
    no model. Distractors are the *most similar* other cards (TF-IDF near-miss).
    Four kinds, chosen by hash — all with labels correct by construction:

    - mcq: "which one-line description matches this?" (distractors = near-miss glosses)
    - cloze: fill in the blanked key term
    - truefalse: subject paired with its own gloss (true) or a dissimilar one (false)
    - spotwrong: four subject:gloss statements, one deliberately mismatched
    """
    h = int(hashlib.sha1(card["id"].encode()).hexdigest(), 16)
    correct_index = h % 4
    cid = card["id"]
    # rank other cards by similarity to this one → near-miss distractors first
    ranked = sorted(
        (o for o in others if o["id"] != cid),
        key=lambda o: (-_similarity(cid, o["id"], vec, norm), o["id"]),
    )
    if len(ranked) < 3:
        return None

    # kind rotation by hash; each falls through to mcq if it can't build cleanly
    kind = h % 5
    if kind == 0:
        q = _cloze_quiz(card, ranked, h, correct_index)
        if q:
            return q
    elif kind == 1:
        q = _true_false_quiz(card, ranked, h)
        if q:
            return q
    elif kind == 2 and len(ranked) >= 3:
        q = _spot_wrong_quiz(card, ranked, h, correct_index)
        if q:
            return q

    # definition-match (default / fallback)
    correct = _first_sentence(card.get("answer", ""))
    if len(correct) < 20:
        return None
    distractors: list[str] = []
    for o in ranked:
        g = _first_sentence(o.get("answer", ""))
        if len(g) >= 20 and g != correct and g not in distractors:
            distractors.append(g)
        if len(distractors) == 3:
            break
    if len(distractors) < 3:
        return None
    choices = distractors[:]
    choices.insert(correct_index, correct)
    return {"choices": choices, "correctIndex": correct_index, "kind": "mcq"}


def _add_synthetic_quizzes(cards: list[dict]) -> int:
    """Give every quiz-less card a deterministic near-miss MCQ. Returns count added."""
    vec, norm = _build_vectors(cards)
    added = 0
    for c in cards:
        if not c.get("quiz"):
            quiz = _synthesize_quiz(c, cards, vec, norm)
            if quiz:
                c["quiz"] = quiz
                added += 1
    return added
