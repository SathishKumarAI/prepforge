---
qid: ing_72653f8a4b__faang__local
question: 'Explain: Code comprehension and navigation — How to use AI in Meta\u2019s
  AI-assisted coding interview (with real prompts and examples)'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 250
output_tokens: 543
total_tokens: 793
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:09:40-05:00'
sources: []
---

**1️⃣ Clarify**  
*Problem:* Show how a Meta‑style AI can help a candidate understand and navigate code during a live coding interview.  
*Assumptions to confirm:*  
- The AI is integrated into the IDE (VS Code/JetBrains) via an extension.  
- It has access to the repo, current cursor position, and problem statement.  
- Real‑time latency < 200 ms for smooth interaction.

**2️⃣ Approach**  
1. **Context ingestion** – parse file tree & open file into a language model (LLM).  
2. **Prompt engineering** – generate prompts that ask the AI to “explain this function” or “walk me through the loop at line 42.”  
3. **Interaction flow** – user types a natural‑language query; the extension sends it, receives concise explanation + code snippets.  
4. **Navigation aids** – offer quick links (Go to Definition, Find References) and highlight related sections.

**3️⃣ Depth**  
*Example Prompt:*  
```
Explain how `mergeIntervals` works in src/intervals.ts starting from line 27.
```
*LLM Response:*  
> The function iterates over sorted intervals…; at line 35 it merges overlapping ranges by updating the end if `current.end > next.start`.  
The AI returns a Markdown block, links to relevant lines, and even suggests a unit test.

**Complexity & Trade‑offs:**  
- *Time:* O(1) for prompt dispatch; LLM inference ~200 ms.  
- *Space:* Store tokenized AST (~O(n)).  
- *Privacy:* All code stays local unless user opts in to cloud sync.

**4️⃣ Edge Cases**  
- **Large files** – fall back to summarization instead of line‑by‑line explanations.  
- **Non‑deterministic output** – cache responses keyed by file hash + cursor position.  
- **Mismatched language support** – provide a fallback “language not supported” message.

**5️⃣ Optimize & Communicate**  
*Improvements:* Incrementally feed code changes to the LLM to keep context fresh; use fine‑tuned models for domain‑specific patterns (e.g., GraphQL).  
*Narrative:* Start by describing how the tool reads the current file, then show a sample query and response, finish with performance notes. This demonstrates structured thinking, technical depth, and an eye toward production readiness—exactly what Meta interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
