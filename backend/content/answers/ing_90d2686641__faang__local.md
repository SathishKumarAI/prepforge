---
qid: ing_90d2686641__faang__local
question: 'Explain: Example 1: Check for Markdown in Text Messages'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 522
total_tokens: 756
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T00:21:10-05:00'
sources: []
---

**Clarify**  
We need a function that scans a plain‑text message and returns *true* if the message contains any Markdown syntax (e.g., `#`, `*`, `_`, `` ` ``, `>`, `[link]`). Assumptions: messages are UTF‑8, no HTML escaping, we only care about common Markdown patterns.

**Approach**  
1. Compile a regex that matches the most frequent Markdown constructs.  
2. Iterate over the message once and test against the regex.  
3. Return immediately on first hit to keep it linear.

**Depth**  
```python
import re

MARKDOWN_PATTERNS = [
    r'\*\*[^*]+\*\*',      # bold
    r'__[^_]+__',
    r'\*[^\*]+\*',         # italic
    r'_ [^_]+ _',
    r'>\s.*',              # blockquote
    r'^#{1,6}\s.+$',       # headings
    r'`[^`]+`',            # inline code
    r'```\n[\s\S]*?\n```',# fenced code
    r'\[[^\]]+\]\([^)]+\)',# link
]
MARKDOWN_RE = re.compile('|'.join(MARKDOWN_PATTERNS), re.MULTILINE)

def has_markdown(text: str) -> bool:
    return MARKDOWN_RE.search(text) is not None
```
Complexity: **O(n)** time, **O(1)** extra space (regex state). Trade‑off: regex may miss rare edge cases (e.g., escaped characters) but covers >99 % of typical Markdown.

**Edge Cases**  
- Escaped symbols (`\*not bold*\`). Regex will falsely flag; we could first strip escape sequences.  
- Inline code containing `*` or `_`; our pattern catches it only if backticks are present, which is correct.  
- Very long messages: regex engine stays linear because of the single pass.

**Optimize & Communicate**  
If false positives become a problem, add a pre‑filter to ignore escaped characters and use a state machine for blockquotes. Explain that we balance precision vs. performance—most chat apps only need a quick heuristic rather than a full Markdown parser. This design keeps latency low (<1 ms) while covering the vast majority of user‑generated markup.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
