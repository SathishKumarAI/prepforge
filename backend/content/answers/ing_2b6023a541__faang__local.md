---
qid: ing_2b6023a541__faang__local
question: 'Explain: Agent-as-Judge: Trajectory Grading — Llm Evaluation'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 237
output_tokens: 504
total_tokens: 741
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:23:46-05:00'
sources: []
---

**Agent‑as‑Judge: Trajectory Grading – LLM Evaluation**

| Step | What I’d do |
|------|-------------|
| **1️⃣ Clarify** | *Restate:* We want a system that lets an AI judge the quality of a dialogue or plan (a “trajectory”) produced by another LLM, assigning a numeric score. <br>*Assumptions to confirm:* 1) we have a reference ground truth or rubric; 2) the judging agent can access full context and prior turns; 3) evaluation must be fast enough for online use. |
| **2️⃣ Approach** | 1. **Prompt engineering:** craft a prompt that frames the judge as an expert evaluator, supplying the trajectory, a scoring rubric, and optional examples. <br>2. **Iterative refinement:** let the judge propose a score, then ask it to justify in natural language; this gives a trace of its reasoning. <br>3. **Post‑processing:** parse the numeric output, map free‑text justification into features (fluency, relevance, correctness) for downstream metrics. |
| **3️⃣ Depth** | *Core logic:* The judge model receives `{"trajectory": [...], "rubric": {...}}`. It outputs `{score: 8/10, rationale: "..."} `. <br>*Complexity:* O(n) tokens per turn; inference latency ~200 ms on a 16‑GB GPU. Trade‑off: higher temperature yields more diverse justifications but less deterministic scores. |
| **4️⃣ Edge Cases** | • Trajectory contains non‑English text → fallback to language‑agnostic rubric.<br>• Score out of bounds (e.g., “15”) → clamp and log error.<br>• Ambiguous rubric → prompt clarifying questions before scoring. |
| **5️⃣ Optimize & Communicate** | *Improvements:* cache partial evaluations, use a smaller distilled judge for real‑time tasks, or fine‑tune on annotated trajectories to reduce hallucination. <br>*Narration:* “I’ll first let the model read the entire conversation, then ask it to rate each turn against the rubric, and finally aggregate the scores.” This shows clear intent, systematic steps, and consideration of trade‑offs—exactly what FAANG interviewers look for.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
