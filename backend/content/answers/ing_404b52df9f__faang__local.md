---
qid: ing_404b52df9f__faang__local
question: 'Explain: Example 1: Check for Markdown in Text Messages'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 547
total_tokens: 781
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T21:13:30-05:00'
sources: []
---

**Clarify**  
You want a function that scans an incoming text message and flags whether it contains any Markdown syntax (e.g., `*bold*`, `` `code` ``, `[link](url)`). Assume we’re working in Python, the input is plain ASCII/UTF‑8, and we only care about common Markdown patterns.

**Approach**  
1. List regex snippets for each syntax: emphasis (`[*_]{1,2}[^*_]+[*_]{1,2}`), code fences (`` ```.+?``` ``), inline code (`` `[^`]+` ``), links (`\[[^\]]+\]\([^)]+\)`), images (`!\[.*?\]\(.*?\)`).
2. Combine them into a single alternation regex.
3. Compile once, then test each message with `re.search`.
4. Return a boolean or highlight matched substrings.

**Depth**  
```python
import re

MARKDOWN_PATTERNS = [
    r'[*_]{1,2}[^*_]+[*_]{1,2}',          # bold/italic
    r'`[^`]+`',                           # inline code
    r'\[\[.*?\]\(.*?\)',                  # link
    r'!\[.*?\]\(.*?\)',                   # image
    r'```.+?```',                         # fenced code block (DOTALL)
]
MARKDOWN_RE = re.compile('|'.join(MARKDOWN_PATTERNS), flags=re.DOTALL)

def has_markdown(text: str) -> bool:
    return MARKDOWN_RE.search(text) is not None
```
Complexity: O(n) time, O(1) space (regex state). Trade‑off: regex may miss edge cases like escaped brackets; a full Markdown parser would be heavier.

**Edge Cases**  
- Escaped characters (`\*not bold\*`) – our regex will still match; we’d need lookbehind or a parsing library.  
- Nested markdown (e.g., `[*bold *and italic*]`) – regex may partially capture.  
- Very large messages could hit recursion limits in regex; use non‑recursive patterns.

**Optimize & Communicate**  
If false positives become problematic, switch to a lightweight Markdown parser (e.g., `mistune`’s AST) and traverse nodes for the desired syntax types. Explain trade‑offs: regex is fast but brittle; a parser is accurate but slower. Always benchmark on production traffic before deployment.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
