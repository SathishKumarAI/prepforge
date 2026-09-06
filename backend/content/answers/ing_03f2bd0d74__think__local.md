---
qid: ing_03f2bd0d74__think__local
question: 'Explain: Test a prompt with your eval — Working with evals | OpenAI API'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 517
total_tokens: 712
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:00:09-05:00'
sources: []
---

**1️⃣ Clarify the goal & assumptions**  
- *Goal*: Understand how to run a test‑prompt using an evaluation (“eval”) in the OpenAI API.  
- *Assumptions*: The user has an API key, knows basic request syntax, and is familiar with the concept of “evaluator” or “evaluation function.”  

**2️⃣ Mental model / framework**  
1. **Prompt → Model response**: Send a prompt to the language model (ChatCompletion or Completion).  
2. **Eval definition**: An evaluation is a small program (often in JSON‑L or Python) that receives the model’s output and returns a score or pass/fail.  
3. **Evaluation workflow**:  
   - Create an `eval` object (name, description, source code).  
   - Attach it to a run via the `evaluation` field.  
4. **Execution & result**: The API runs the eval after generating the response and returns the evaluation outcome.

**3️⃣ Step‑by‑step reasoning**  
1. Define the prompt you want to test (e.g., “Explain quantum tunneling”).  
2. Write an eval that checks for key facts or correct terminology.  
   - In JSON‑L: `"score": "PASS" if "wavefunction" in output else "FAIL"`  
3. Create a `ChatCompletion` request, including the prompt and the `evaluation` array with your eval ID.  
4. Send the request; the API returns the model’s answer plus the eval result (e.g., `{score: "PASS", message: ...}`).  

**4️⃣ Common traps to avoid**  
- Forgetting to register the eval before using it.  
- Using a language that isn’t supported (JSON‑L vs Python).  
- Not escaping special characters in the prompt or eval code.  
- Misunderstanding that evals run **after** model generation, not during.  

**5️⃣ Sanity‑check & communicate**  
- Verify the eval’s logic by running it locally on a known answer.  
- Print both the raw response and the eval score when debugging.  
- Explain to the user: “We first generate the model output, then the eval function inspects that output to produce an objective metric.”  

By following this structure—clarify, model, step through, watch pitfalls, validate—you can reliably test prompts with OpenAI’s evaluation framework.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
