---
qid: ing_204e4be9c9__think__local
question: 'Explain: Run judgy correction — Ai Evals Complete Guide Langwatch Langfuse'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 195
output_tokens: 673
total_tokens: 868
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T04:49:24-05:00'
sources: []
---

### 1️⃣ Clarify First  
- **Assumption**: You have a trained LLM and want to evaluate it with *judgment‑based* (human‑like) corrections.  
- **Goal**: Use **Langwatch** for real‑time monitoring of prompts/outputs, and **Langfuse** for structured evaluation pipelines that can feed back “corrected” responses.

### 2️⃣ Mental Model / Framework  
| Component | Role |
|-----------|------|
| Prompt → LLM | Generates raw answer |
| Langwatch | Streams token‑level data (latency, cost, safety flags) |
| Langfuse Evaluation | Applies a *judgment* function (human or automated rubric) to the output and records score/feedback |
| Correction Loop | If score < threshold, re‑invoke LLM with modified prompt (or chain of prompts) |

### 3️⃣ Step‑by‑Step Reasoning  
1. **Set up Langwatch**:  
   - Instrument your inference code (`llm.invoke(...)`) to emit events to Langwatch’s websocket endpoint.  
2. **Define Evaluation in Langfuse**:  
   - Create an *Evaluation* with a *Judgment Function* (e.g., “Is the answer factually correct?”).  
   - Link it to the same request ID used by Langwatch so events sync.  
3. **Run Inference**:  
   - Call LLM; Langwatch logs tokens, latency, cost.  
4. **Apply Judgment**:  
   - After receiving output, Langfuse triggers the judgment function.  
   - It returns a numeric score and optional text feedback.  
5. **Correction Decision**:  
   - If `score < desired_threshold`, formulate a *re‑prompt* (e.g., add “Explain step by step”).  
   - Re‑invoke LLM; loop back to step 3.  
6. **Persist & Visualize**:  
   - Langwatch shows real‑time graphs of token usage vs. score trends.  
   - Langfuse dashboards display cumulative scores, error rates, and logs.

### 4️⃣ Common Traps to Avoid  
- **Mismatched IDs**: Ensure the same request ID flows through both tools; otherwise judgments won’t attach to the right output.  
- **Over‑re‑prompting**: Too many iterations inflate cost—set a max retry limit.  
- **Blind Judgment Functions**: Automated metrics (BLEU, ROUGE) may miss nuance; combine with human review when possible.

### 5️⃣ Sanity‑Check & Communicate Out Loud  
- **Quick Check**: Verify that a single request produces an entry in both Langwatch and Langfuse dashboards.  
- **Explain to Stakeholders**: “We stream token data via Langwatch for cost control, while Langfuse’s judgment engine gives us a score; if the score is low we automatically re‑prompt.”  

This loop lets you *judge* and *correct* AI outputs in near real‑time, leveraging both tools’ strengths.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
