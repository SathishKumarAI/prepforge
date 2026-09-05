---
qid: ing_27d7391763__eli5__local
question: 'Explain: Q126: Agent Plugins bundle skills and MCP servers into one installable
  unit, and published research puts static detection of malicious skills at 0% for
  host destruction. Design the review and distribution pipeline for internal plugins.'
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 192
output_tokens: 348
total_tokens: 540
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T09:38:53-05:00'
sources: []
---

**Think of an AI plugin like a tiny, self‑contained kitchen appliance that can do one special task—say, chopping onions or whisking eggs.**  
The **review and distribution pipeline** is the recipe book that tells you how to make sure every appliance works safely before it goes into anyone’s home.

1. **Build (Bundle)** – Developers package the appliance’s software together with a *MCP server* (the “control board” that talks to the rest of the AI) into one installer, just like putting all the parts of a blender in a box.  
2. **Test (Static Scan)** – The code is first run through an automated scanner that looks for obvious bad instructions—like a knife that could slice through the countertop. This scan catches many problems but can’t guarantee no hidden tricks (research shows it’s 0 % effective at spotting all malicious skills).  
3. **Dynamic Review** – Next, the appliance runs in a sandboxed kitchen: it actually performs its task while an auditor watches for anything that tries to damage the host system—no knives slipping onto the floor, no power surge.  
4. **Approval & Tagging** – If it passes, it gets a safety label and is added to the internal catalog.  
5. **Distribution** – The labeled installer is then pushed through the company’s secure download portal, where only authorized users can install it.

By combining static checks with live sandbox testing and clear labeling, we keep our AI “kitchen” safe while letting developers share useful skills quickly.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
