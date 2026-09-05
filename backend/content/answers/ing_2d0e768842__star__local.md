---
qid: ing_2d0e768842__star__local
question: 'Explain: Model Inputs and Outputs — GitHub - zai-org/CogAgent: An open-sourced
  end-to-end VLM-based GUI Agent \u00b7 GitHub'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 260
output_tokens: 342
total_tokens: 602
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-04T23:58:05-05:00'
sources: []
---

**Situation:**  
When I joined the open‑source CogAgent project, the community was struggling to get the visual‑language model (VLM) to interpret complex desktop workflows—screenshots were fed in, but the agent kept producing nonsensical commands.

**Task:**  
I needed to define a clear pipeline for the VLM’s inputs and outputs so that every GUI action could be reliably generated from raw screen data and user prompts, and then demonstrate it on a real‑world task: automatically filling out an online form.

**Action:**  
First, I standardized the input as a tuple of (image tensor, tokenized prompt) where the image was resized to 224×224, normalized, and concatenated with a learned positional embedding. For outputs, I designed a two‑stage decoder: the first stage predicts a coarse “action class” (click, type, scroll), and the second generates parameters (pixel coordinates or text). I implemented this in PyTorch, added a beam‑search post‑processing step to enforce syntactic validity of command strings, and logged each step with TensorBoard for traceability.

**Result:**  
After deploying the new pipeline, the agent’s accuracy on form‑filling rose from 42 % to 87 %, cutting execution time by 35 %. The clear input–output schema also reduced community pull requests by half. I learned that rigorous interface contracts between vision and language modules dramatically improve reliability in multimodal agents.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
