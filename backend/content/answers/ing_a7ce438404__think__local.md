---
qid: ing_a7ce438404__think__local
question: 'Explain: Shell commands and scripting — How to use AI in Meta\u2019s AI-assisted
  coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 206
output_tokens: 595
total_tokens: 801
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:35:09-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Show how shell scripts can invoke an LLM (e.g., Meta’s CodeLlama or other AI) during a coding interview.  
- *Assumptions*: The user has terminal access, `curl`/`http`, and an API key for the AI service. They’re comfortable writing basic Bash scripts.

**2️⃣ Pick a mental model: “Prompt‑as‑a‑File”**  
Treat each prompt as a separate file (e.g., `question.txt`). Your script reads that file, calls the AI endpoint, writes the response to another file (`answer.txt`), and optionally prints it. This keeps prompts reusable and scripts modular.

**3️⃣ Step‑by‑step reasoning**  

| Step | What you do | Why |
|------|-------------|-----|
| a | `cat question.txt > prompt.txt` | Capture the exact interview question. |
| b | Build JSON body: `jq -n --arg p "$(cat prompt.txt)" '{model:"meta/codellama-70b",prompt:$p,temperature:0.2,max_tokens:256}' > payload.json` | Properly escape newlines & quotes for the API. |
| c | Call the endpoint: `curl -H "Authorization: Bearer $API_KEY" -H "Content-Type: application/json" -d @payload.json https://api.meta.ai/v1/ai/completions > raw_response.json` | Sends prompt, receives structured JSON. |
| d | Extract code block: `jq -r '.choices[0].message.content' raw_response.json > answer.txt` | Keeps only the useful part. |
| e | Optionally run tests: `bash -c "$(cat answer.txt)"` or `python answer.py`. | Validates the AI’s output before presenting it. |

**4️⃣ Common traps to avoid**

- **Hard‑coding secrets** – always use environment variables (`export API_KEY=…`).  
- **Mismatched JSON** – a stray comma breaks the request; test with `jq .` first.  
- **Large prompts** – exceed token limits; trim or summarize.  
- **Ignoring rate limits** – add exponential back‑off if you hit 429 errors.

**5️⃣ Sanity‑check & communicate**

1. Run the script locally on a simple prompt to confirm it prints the answer.  
2. Verify the output against expected logic (e.g., run unit tests).  
3. In an interview, explain: “I’m using a Bash wrapper that feeds the question to Meta’s AI and captures the generated code, then I run quick checks before showing it.”  

This approach keeps your shell script clean, reusable, and demonstrates clear integration of AI into coding interviews.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
