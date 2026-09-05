---
qid: vq_fb746a6890__fp__local
question: Kind of COMMENT statements placed within SQL statements ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 169
output_tokens: 456
total_tokens: 625
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:04:47-05:00'
sources: []
---

In SQL the only “real” comment constructs are those that the parser recognises as *non‑tokens* – i.e., pieces of text that are discarded before any semantic action occurs.  
From a formal‑language point of view, the lexer is defined to emit two kinds of *comment tokens*:

| Syntax | Scope | Typical use |
|--------|-------|-------------|
| `-- <text>` (or `# <text>` in MySQL) | From the `--` marker to the next newline | Quick line‑by‑line notes, inline hints, or disabling a single statement |
| `/* <text> */` | Any text between the opening and closing delimiters, even spanning lines | Block comments, multi‑statement explanations, or temporary comment‑out of large query fragments |

The lexer treats both as *whitespace*; they do not influence the parse tree or execution plan.  
Why this design? It keeps parsing linear: once a `--` is seen the rest of the line is ignored, and with `/* … */` the lexer simply skips until it encounters the matching `*/`. This avoids backtracking and ensures that comment removal is \(O(n)\) in source length.

**Non‑obvious insight:** In some engines (e.g., PostgreSQL), block comments can be nested (`/* outer /* inner */ outer */`). This nesting capability is a deliberate choice to preserve readability when commenting out code blocks that themselves contain `/* … */` delimiters, but it requires the lexer to maintain a depth counter—an extra state that would otherwise complicate the grammar.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
