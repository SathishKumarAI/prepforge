---
qid: ing_a5f5704680__think__local
question: How do you make tool outputs token-efficient, and why does it matter so
  much for agents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 197
output_tokens: 632
total_tokens: 829
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T12:01:22-05:00'
sources: []
---

**1️⃣ Clarify the problem & assumptions**  
- *What is “token‑efficiency” exactly?*  I’ll interpret it as minimizing the number of tokens a tool (e.g., LLM, API call) consumes while still delivering useful output.  
- *Why does it matter for agents?*  Agents make many calls; each token costs compute, time, and possibly money.  Efficiency reduces latency, cost, and improves scalability.  
- Assume the agent has access to a standard LLM (e.g., GPT‑4) and can tweak prompts or post‑process outputs.

**2️⃣ Mental model / framework**  
Use a **“cost–benefit” lens**:  
- *Cost*: tokens × price per 1k tokens, plus compute time.  
- *Benefit*: quality of the information needed for the agent’s next step.  
Apply the **Pareto principle**: aim to keep outputs in the top‑20 % that yield 80 % of the required value.

**3️⃣ Step‑by‑step reasoning**  

1. **Define the minimal requirement** – what facts, format, or structure does the agent truly need?  
2. **Prompt engineering** – craft concise, explicit prompts: use short instructions, bullet points, and ask for a single output line when possible.  
3. **Control temperature & max tokens** – set low temperature for deterministic answers and cap max tokens to the minimal length that still covers all required info.  
4. **Post‑processing** – strip whitespace, remove unnecessary headers, or truncate extraneous context before sending back to the agent.  
5. **Iterative refinement** – if the output is too short, let the agent request clarification in a new, smaller prompt instead of over‑generating initially.

**4️⃣ Common traps to avoid**  

- *Over‑prompting*: giving too much context forces the model to waste tokens on irrelevant background.  
- *Under‑prompting*: vague requests lead to long “I’m not sure” answers that are token‑heavy.  
- *Not accounting for prompt overhead*: remember that prompt text itself consumes tokens; keep it lean.  
- *Ignoring cost structure*: some APIs charge per request regardless of length, so fewer calls can be cheaper than fewer tokens.

**5️⃣ Sanity‑check & verbalize**  

- **Check token count**: run the prompt + expected output through a tokenizer to confirm you’re below your target.  
- **Validate usefulness**: mentally simulate the agent’s next step—does it have enough data?  
- **Explain aloud**: “I trimmed the instruction to one sentence, capped tokens at 60, and removed filler phrases. This keeps the call under $0.0003 while still giving me the exact metric needed.”  

By iterating this cycle—clarify → model → reason → avoid traps → sanity‑check—you’ll consistently produce token‑efficient tool outputs that keep agents fast, cheap, and reliable.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
