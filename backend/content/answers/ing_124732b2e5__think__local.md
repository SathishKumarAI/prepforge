---
qid: ing_124732b2e5__think__local
question: You're doing a security review of a coding agent that executes model-generated
  code. What's your threat model and controls?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 200
output_tokens: 446
total_tokens: 646
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T03:56:18-05:00'
sources: []
---

**1. Clarify scope & assumptions**  
   - What *type* of coding agent (e.g., LLM‑based code generator)?  
   - Who runs the generated code? In‑process sandbox or separate VM?  
   - Are inputs user‑supplied, or from a curated set?  
   - Define “security review”: static analysis, dynamic testing, threat modeling.

**2. Adopt a layered threat‑modeling framework**  
   - Use STRIDE (Spoofing, Tampering, Repudiation, Information disclosure, Denial of service, Elevation of privilege).  
   - Map each STRIDE category to the agent’s lifecycle: model inference → code generation → execution.

**3. Step‑by‑step reasoning toward controls**  
   1. Identify attack surfaces (API endpoints, file I/O, network access).  
   2. Enumerate potential adversarial inputs (malicious prompts, prompt injection).  
   3. Evaluate risks of generated code: arbitrary system calls, persistence, data exfiltration.  
   4. For each risk, propose mitigations: sandboxing, least‑privilege execution, static linting, runtime monitoring.

**4. Common traps to avoid**  
   - Assuming the model can’t “think” about malicious intent; adversarial prompt injection is real.  
   - Overreliance on a single isolation technique (e.g., Docker alone).  
   - Neglecting supply‑chain attacks: compromised training data or library dependencies.

**5. Sanity‑check & communicate**  
   - Re‑explain the threat model to stakeholders in plain language, ensuring they understand each STRIDE element.  
   - Validate controls by running a small proof‑of‑concept attack (e.g., prompt that generates `rm -rf /`).  
   - Iterate: if the attack succeeds, tighten sandbox or add static analysis.

By following this structured approach, you can systematically identify threats to a coding agent and design robust, layered controls.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
