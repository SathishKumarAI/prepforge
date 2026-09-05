---
qid: ing_d6acc11d0d__star__local
question: 'Explain: Test case generation — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 252
output_tokens: 376
total_tokens: 628
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T06:38:00-05:00'
sources: []
---

**Situation** – During my last internship at a fintech startup, our QA team struggled to cover edge cases for the new transaction validation API. The manual test suite grew unwieldy and still missed 15% of potential failure points.

**Task** – I was asked to design an AI‑driven test case generator that could produce realistic inputs, including boundary values and malicious payloads, for Meta’s upcoming AI‑assisted coding interview challenge on “Generate comprehensive unit tests for a REST endpoint.”

**Action** – First, I scripted a prompt:  
```
“Given the following Flask route, generate 10 unit tests covering normal, edge, and security scenarios. Include input values, expected status codes, and response schemas.”  
def create_transaction(user_id: int, amount: float) -> Response:
    ...
```  
Using OpenAI’s GPT‑4, I fed the prompt along with sample API docs. The model returned test snippets in pytest format. I then parsed the output, ran them against a sandboxed instance, and used coverage.py to verify 98% branch coverage. To ensure diversity, I added a second prompt that asked for “negative tests simulating SQL injection and XSS attempts.” The AI produced payloads like `{"amount": "0; DROP TABLE users;"}` which revealed a hidden vulnerability.

**Result** – The automated generator cut manual test creation time by 70%, uncovered two critical bugs before production, and scored 96% on Meta’s interview rubric. I learned that framing precise prompts and iterating on model feedback can turn generative AI into a powerful QA ally.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
