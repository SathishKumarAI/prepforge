"""Ingest an Obsidian vault of interview PDFs/notes into deduped, source-tagged questions.

Rules the owner asked for:
- Extract questions from vault PDFs / .md / .txt / .html.
- **Never duplicate a question.** Dedupe by normalized question text.
- When the same question appears in another document, DON'T create a new question —
  attach the extra document as a `source`, and if that document has a *different*
  answer, append it as a supplementary `alt_answer` (not a duplicate).
- Each question carries its `sources` so the UI can point back to the document.
"""
from __future__ import annotations

import hashlib
import json
import logging
import re
from pathlib import Path

import yaml

log = logging.getLogger("vault")

BASE = Path(__file__).parent
CONFIG = BASE / "config" / "vault.yaml"
OUT = BASE / "content" / "vault_questions.json"
CURATED = BASE / "content" / "questions.json"

# a line is a question if (after stripping leading numbering) it ends with '?'
_LEAD = re.compile(r"^\s*(?:\d+[\.\)\:]|Q\d*[\.\:]|Question\s*\d*[\.\:]|[-*•])\s*", re.IGNORECASE)
_WS = re.compile(r"\s+")
_NONALNUM = re.compile(r"[^a-z0-9]+")


def _cfg() -> dict:
    return yaml.safe_load(CONFIG.read_text(encoding="utf-8")) if CONFIG.exists() else {}


def _norm(text: str) -> str:
    return _NONALNUM.sub(" ", text.lower()).strip()


def _infer_topic(relpath: str) -> str:
    p = relpath.lower()
    if "machine learning" in p or re.search(r"\bml\b", p):
        return "Machine Learning"
    if "data science" in p or re.search(r"\bds\b", p):
        return "Data Science"
    if "analyt" in p:
        return "Data Analytics"
    if "python" in p:
        return "Python"
    if "behav" in p or "communication" in p:
        return "Behavioral"
    if "devops" in p:
        return "DevOps"
    if "data engineer" in p or re.search(r"\bde\b", p):
        return "Data Engineering"
    if "dsa" in p or "algorithm" in p or "leetcode" in p:
        return "DSA"
    return "AI"


def _tags(question: str) -> list[str]:
    words = re.findall(r"[a-zA-Z][a-zA-Z0-9-]{3,}", question.lower())
    stop = {"what", "which", "when", "where", "does", "your", "with", "have", "explain",
            "describe", "difference", "between", "would", "should", "about", "there", "this"}
    seen, out = set(), []
    for w in words:
        if w in stop or w in seen:
            continue
        seen.add(w)
        out.append(w)
        if len(out) >= 4:
            break
    return out or ["interview"]


def _pdf_text(data: bytes, max_pages: int) -> str:
    from io import BytesIO

    from pypdf import PdfReader

    reader = PdfReader(BytesIO(data))
    parts = []
    for page in reader.pages[:max_pages]:
        try:
            parts.append(page.extract_text() or "")
        except Exception:
            parts.append("")
    return "\n".join(parts)


def _html_text(data: bytes) -> str:
    from bs4 import BeautifulSoup

    soup = BeautifulSoup(data.decode("utf-8", errors="ignore"), "html.parser")
    for t in soup(["script", "style", "nav", "footer", "header"]):
        t.decompose()
    return soup.get_text("\n", strip=True)


def _extract_text(path: Path, max_pages: int) -> str:
    ext = path.suffix.lower()
    try:
        data = path.read_bytes()
    except Exception as exc:
        log.warning("read failed %s: %s", path.name, exc)
        return ""
    try:
        if ext == ".pdf":
            return _pdf_text(data, max_pages)
        if ext in (".md", ".markdown", ".txt"):
            return data.decode("utf-8", errors="ignore")
        if ext in (".html", ".htm"):
            return _html_text(data)
    except Exception as exc:
        log.warning("extract failed %s: %s", path.name, exc)
    return ""


def _parse_questions(text: str) -> list[tuple[str, str]]:
    """Return (question, answer) pairs. Answer is the text until the next question."""
    lines = [ln.rstrip() for ln in text.splitlines()]
    pairs: list[tuple[str, str]] = []
    i = 0
    n = len(lines)
    while i < n:
        raw = lines[i].strip()
        q = _LEAD.sub("", raw).strip()
        if q.endswith("?") and 15 <= len(q) <= 300 and len(q.split()) >= 3:
            # gather answer lines until the next question-ish line
            body: list[str] = []
            j = i + 1
            while j < n:
                nxt = lines[j].strip()
                cand = _LEAD.sub("", nxt).strip()
                if cand.endswith("?") and 12 <= len(cand) <= 300:
                    break
                if nxt:
                    body.append(nxt)
                j += 1
            answer = _WS.sub(" ", " ".join(body)).strip()
            # only keep an answer if it's substantive and not itself a question dump
            if len(answer) < 40 or answer.count("?") > 3:
                answer = ""
            pairs.append((_WS.sub(" ", q), answer[:1600]))
            i = j
        else:
            i += 1
    return pairs


def _collect_files(root: Path, folders: list[str], keywords: list[str]) -> list[Path]:
    exts = {".pdf", ".md", ".markdown", ".txt", ".html", ".htm"}
    out: list[Path] = []
    for p in root.rglob("*"):
        if not p.is_file() or p.suffix.lower() not in exts:
            continue
        rel = str(p.relative_to(root)).lower()
        in_folder = any(rel.startswith(f.lower() + "/") or ("/" + f.lower() + "/") in ("/" + rel) for f in folders)
        in_name = any(k in p.name.lower() for k in keywords)
        if in_folder or in_name:
            out.append(p)
    return out


def ingest() -> dict:
    cfg = _cfg()
    root = Path(cfg.get("path", "")).expanduser()
    if not root.exists():
        return {"error": "no_vault", "message": f"Vault path not found: {root}"}
    max_pages = int(cfg.get("max_pages_per_pdf", 80))
    max_q = int(cfg.get("max_questions", 2000))

    # skip questions already in the curated bank (avoid cross-file duplicates)
    curated_norms = set()
    if CURATED.exists():
        try:
            for q in json.loads(CURATED.read_text(encoding="utf-8")).get("questions", []):
                curated_norms.add(_norm(q.get("question", "")))
        except Exception:
            pass

    files = _collect_files(root, cfg.get("include_folders", []) or [], cfg.get("include_keywords", []) or [])
    by_norm: dict[str, dict] = {}
    files_used = 0

    for path in files:
        rel = str(path.relative_to(root))
        text = _extract_text(path, max_pages)
        if not text.strip():
            continue
        topic = _infer_topic(rel)
        src = {"title": path.stem, "path": rel}
        found = False
        for question, answer in _parse_questions(text):
            norm = _norm(question)
            if not norm or norm in curated_norms:
                continue
            found = True
            if norm in by_norm:
                item = by_norm[norm]
                # attach source if new
                if not any(s["path"] == rel for s in item["sources"]):
                    item["sources"].append(src)
                # supplementary answer if it's non-empty and genuinely different
                if answer:
                    an = _norm(answer)
                    existing = {_norm(item["answer"])} | {_norm(a["answer"]) for a in item["alt_answers"]}
                    if an and an not in existing:
                        item["alt_answers"].append({"answer": answer, "source": src})
            else:
                if len(by_norm) >= max_q:
                    continue
                by_norm[norm] = {
                    "id": "vq_" + hashlib.sha1(norm.encode()).hexdigest()[:10],
                    "topic": topic,
                    "difficulty": "medium",
                    "tags": _tags(question),
                    "question": question,
                    "answer": answer,
                    "sources": [src],
                    "alt_answers": [],
                    "from_vault": True,
                }
        if found:
            files_used += 1

    questions = list(by_norm.values())
    OUT.write_text(json.dumps({"questions": questions}, indent=2, ensure_ascii=False), encoding="utf-8")
    log.info("vault ingest: %d files scanned, %d used, %d unique questions", len(files), files_used, len(questions))
    return {
        "ok": True,
        "files_scanned": len(files),
        "files_with_questions": files_used,
        "questions": len(questions),
        "with_answers": sum(1 for q in questions if q["answer"]),
        "multi_source": sum(1 for q in questions if len(q["sources"]) > 1),
    }


def read_source(rel_path: str) -> dict:
    """Read one vault file (by vault-relative path) as markdown, for the source viewer.
    Path is confined to the vault root — traversal is rejected."""
    cfg = _cfg()
    root = Path(cfg.get("path", "")).expanduser().resolve()
    try:
        target = (root / rel_path).resolve()
    except Exception:
        return {"error": "bad_path"}
    if not str(target).startswith(str(root)) or not target.is_file():
        return {"error": "forbidden", "message": "Path outside the vault."}
    text = _extract_text(target, int(cfg.get("max_pages_per_pdf", 80)))
    if not text.strip():
        return {"error": "empty", "message": "No extractable text (scanned image PDF?)."}
    if target.suffix.lower() in (".md", ".markdown"):
        md = text
    else:
        md = f"# {target.stem}\n\n" + re.sub(r"\n{3,}", "\n\n", text).strip()
    return {"ok": True, "title": target.stem, "markdown": md[:60000], "path": rel_path}
