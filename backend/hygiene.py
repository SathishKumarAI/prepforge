"""Is this text a question at all?

133 cards in the bank began mid-sentence — a splitter cut a question in half
and wrote the tail as its own card — and 57 more carried the document's
section number. Both had answers, so nothing flagged them. `usable_question`
is the one rule, called from ingest (before a card is written) and from the
bank (for cards already written). Keep it here so both ends agree.
"""
from __future__ import annotations

import re

# or dotted section numbering, both of which say "outline", not "sentence".
_LEAD_SECTION = re.compile(r"^\s*\d{1,3}(?:\.\d{1,3})+\s*[).:\-]*\s*|^\s*\d{1,3}\s*[).:\-]+\s*")

# The words a real question can start with. Not a wordlist of junk — the
# opposite: a list of the ways an English question opens, used to recognise the
# ones that DON'T, which is the signal that the text began somewhere else.
_QUESTION_OPENERS = {
    "what", "when", "how", "why", "which", "who", "whom", "whose", "where",
    "is", "are", "was", "were", "do", "does", "did", "can", "could", "should",
    "would", "will", "shall", "may", "might", "have", "has", "had", "if",
    "given", "suppose", "consider",
    # imperatives that ask for something, which interview banks use constantly
    "name", "list", "define", "explain", "describe", "write", "state", "tell",
    "differentiate", "compare", "discuss", "mention", "implement", "design",
    "find", "calculate", "count", "print", "return", "create", "select",
    "insert", "update", "delete",
}
_FIRST_TOKEN = re.compile(r"[A-Za-z0-9.\-_/]+")


def is_fragment(text: str) -> bool:
    """True when the question starts mid-sentence, because the splitter cut one.

    These are cards whose first half is on the previous card: "and how can it be
    improved?", "for better performance?", "pervised machine learning?" — that
    last one split inside the word "supervised". 133 of them were in the bank,
    every one with an answer, so nothing flagged them: they look like ordinary
    cards until you read the first three words.

    The signal is a lowercase opening that is not one of the ways an English
    question begins. Lowercase ALONE is not enough — "what is windowing in spark
    streaming?" is a real question that was never capitalised, and there are 163
    like it. An identifier is not enough either: "vLLM, SGLang, TensorRT-LLM …
    how do you choose a serving stack?" opens with a product name, so a first
    token carrying an inner capital, a digit, a dot or a slash is left alone.
    """
    t = (text or "").strip()
    if not t[:1].islower():
        return False
    m = _FIRST_TOKEN.match(t)
    token = m.group(0) if m else ""
    if any(c.isupper() for c in token[1:]) or any(c.isdigit() for c in token):
        return False
    if "." in token or "/" in token:
        return False
    word = re.split(r"[^A-Za-z]+", t.lower(), 1)[0]
    return word not in _QUESTION_OPENERS


def usable_question(text: str) -> str | None:
    """The question, tidied — or None when it is not a question.

    One place, called from both ends: `ingest` so new cards never carry the
    defect, and the API's bank assembly so the cards already written stop
    showing it. Two call sites, one rule; a second copy is how they drift.
    """
    t = (text or "").strip()
    if not t:
        return None
    t = _LEAD_SECTION.sub("", t).strip()
    if not t or is_fragment(t):
        return None
    return t
