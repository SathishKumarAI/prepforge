---
qid: ing_90d2686641__fp__local
question: 'Explain: Example 1: Check for Markdown in Text Messages'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 171
output_tokens: 476
total_tokens: 647
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T21:13:08-05:00'
sources: []
---

**Why we need a markdown detector**

A text message is a sequence of characters that may contain *markup*—special tokens that instruct renderers (web browsers, chat apps) to format the content.  
If an application wants to treat user‑supplied input safely (e.g., sanitise for email or plain‑text logs), it must first decide whether the string is “plain” or already contains markup.  The fundamental problem is: *given a stream of bytes, can we decide if it encodes valid markdown syntax?*  

**Deriving a solution**

1. **Tokenisation as a grammar problem.**  
   Markdown is context‑free: each formatting construct (e.g., `*bold*`, `` `code` ``) has a clear start and end token.  Build a minimal lexer that recognises the seven basic delimiters (`#`, `*`, `_`, `` ` ``, `>`, `-`, `[`/`]`).  
2. **Stack‑based parsing.**  
   As you scan, push opening tokens onto a stack; pop when encountering their matching closing token.  If the stack is non‑empty at end or a mismatch occurs, the string is *not* valid markdown.  
3. **Ambiguity resolution.**  
   Some delimiters serve dual roles (e.g., `-` can start a list or be a hyphen).  Resolve by context: a `-` that follows a newline and is followed by whitespace is treated as a list marker; otherwise it’s literal.

**Deep insight**

The stack‑based algorithm is essentially an *LR(0)* parser for a tiny subset of markdown.  It guarantees linear time complexity \(O(n)\) because each character is examined once, and the stack operations are constant‑time.  

**Non‑obvious tip**

Don’t just look for any backtick; you must also ensure that the number of backticks is even (e.g., ```` ```code``` ```).  An odd count means an unclosed code span, which many naive detectors miss but is crucial for correct sanitisation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
