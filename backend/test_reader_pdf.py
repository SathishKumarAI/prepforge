"""Guards for the Reader's PDF text route.

Two things it must never do, and both are quiet:

- **Save anything.** The Reader's contract is that reading something does not add
  it to your library — `POST /resources/upload` is the deliberate, separate step.
  This route runs the same pypdf extraction and must leave no file behind.
- **Return an empty page for a scanned PDF.** Pages of images have no text layer,
  and an empty reading pane looks exactly like a broken feature. It says so
  instead, and the caller falls back to the browser's viewer.

Run: ./.venv/Scripts/python.exe test_reader_pdf.py
"""
from __future__ import annotations

import asyncio
from io import BytesIO

import capture
import main as api


class _Upload:
    """The two attributes the route touches, without needing Starlette's."""

    def __init__(self, data: bytes):
        self._data = data

    async def read(self) -> bytes:
        return self._data


def _pdf(pages: list[list[str]]) -> bytes:
    """A minimal, real PDF with a text layer — built here so the test needs no
    fixture file and no network."""
    objs: list[bytes] = [b"<< /Type /Catalog /Pages 2 0 R >>", b""]
    kids, body_objs = [], []
    next_id = 3
    for lines in pages:
        content_id = next_id + 1
        body_objs.append(
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 400 250] /Contents {content_id} 0 R "
            f"/Resources << /Font << /F1 {len(pages) * 2 + 3} 0 R >> >> >>".encode()
        )
        text = "BT /F1 13 Tf 30 200 Td " + " ".join(f"({l}) Tj 0 -22 Td" for l in lines) + " ET"
        body_objs.append(
            b"<< /Length " + str(len(text)).encode() + b" >>\nstream\n" + text.encode() + b"\nendstream"
        )
        kids.append(f"{next_id} 0 R")
        next_id += 2
    objs[1] = f"<< /Type /Pages /Kids [{' '.join(kids)}] /Count {len(pages)} >>".encode()
    objs += body_objs + [b"<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"]

    out = bytearray(b"%PDF-1.4\n")
    offsets = []
    for i, obj in enumerate(objs, start=1):
        offsets.append(len(out))
        out += f"{i} 0 obj\n".encode() + obj + b"\nendobj\n"
    xref = len(out)
    out += f"xref\n0 {len(objs) + 1}\n".encode() + b"0000000000 65535 f \n"
    for off in offsets:
        out += f"{off:010d} 00000 n \n".encode()
    out += f"trailer\n<< /Size {len(objs) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode()
    return bytes(out)


def _call(data: bytes) -> dict:
    return asyncio.run(api.reader_pdf_text(_Upload(data)))


def test_a_pdf_comes_back_as_markdown_with_a_heading_per_page():
    got = _call(_pdf([["A leech is a card forgotten three times."], ["The second page."]]))
    assert "markdown" in got, got
    md = got["markdown"]
    assert "## Page 1" in md and "## Page 2" in md
    assert "leech" in md and "second page" in md.lower()


def test_the_markdown_is_what_the_reading_pane_renders():
    # It goes through `Markdown`, which sets data-cardable — that is the whole
    # point of this route: a passage in a PDF you can turn into a card.
    md = _call(_pdf([["Spaced repetition schedules by difficulty."]]))["markdown"]
    assert md.lstrip().startswith("## Page 1")


def test_nothing_is_written_to_the_library():
    before = sorted(p.name for p in (capture.LIBRARY.glob("*") if capture.LIBRARY.exists() else []))
    _call(_pdf([["Reading is not saving."]]))
    after = sorted(p.name for p in (capture.LIBRARY.glob("*") if capture.LIBRARY.exists() else []))
    assert before == after, "the Reader's extraction wrote into the library"


def test_a_pdf_with_no_text_layer_says_so():
    # A scanned PDF is pages of pictures. An empty pane looks like a bug; this
    # is the difference between "nothing here" and "nothing readable here".
    got = _call(_pdf([[]]))
    assert got.get("error") == "no_text", got
    assert "scanned" in got["message"].lower()


def test_bytes_that_are_not_a_pdf_are_refused_politely():
    got = _call(b"this is not a pdf at all")
    assert got.get("error") == "unreadable", got
    assert got["message"]


def test_an_empty_upload_is_not_an_exception():
    got = _call(b"")
    assert got.get("error") == "empty", got


if __name__ == "__main__":
    passed = 0
    tests = [v for k, v in sorted(vars().copy().items()) if k.startswith("test_")]
    for fn in tests:
        try:
            fn()
            print(f"ok   {fn.__name__}")
            passed += 1
        except AssertionError as exc:
            print(f"FAIL {fn.__name__}: {exc}")
    print(f"\n{passed}/{len(tests)} pass")
    raise SystemExit(0 if passed == len(tests) else 1)
