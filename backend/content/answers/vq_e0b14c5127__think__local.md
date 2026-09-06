---
qid: vq_e0b14c5127__think__local
question: What are the Control Flow activities in the Azure Data Factory?
topic: Data Engineering
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 191
output_tokens: 408
total_tokens: 599
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T02:33:01-05:00'
sources: []
---

**1. Clarify the scope and assumptions**  
   - Confirm that “Control Flow” refers to *activities* (not pipelines or triggers).  
   - Assume the question targets **Azure Data Factory (ADF) v2** and not Synapse or older versions.

**2. Adopt a mental model of ADF activity taxonomy**  
   - ADF activities are split into *data movement*, *data transformation*, and *control flow*.  
   - Control Flow activities orchestrate execution order, branching, looping, and error handling.

**3. Enumerate the control‑flow activities step by step**  
   - Start with the most common: **If Condition**, **ForEach**, **Until**, **Switch**.  
   - Add the orchestration helpers: **Execute Pipeline**, **Wait**, **Set Variable**, **Append Variable**, **Web**, **Azure Function**, **Custom**, **Delete**, **Copy** (though Copy is data movement, it can appear in control flow).  
   - Include error‑handling wrappers like **Try-Catch** and **Fail**.

**4. Beware of common traps**  
   - Don’t conflate *activities* with *pipeline triggers* or *data flows*.  
   - Remember that some “control” activities (e.g., Copy) are technically data movement but can be used in a control context; clarify their dual role if needed.  
   - Avoid listing deprecated or legacy features unless explicitly asked.

**5. Sanity‑check and communicate clearly**  
   - Cross‑reference the latest Azure docs to ensure no new activities (e.g., **Execute Data Flow**) are omitted.  
   - Present the list in a concise table or bullet form, highlighting each activity’s primary purpose.  
   - End with a brief note that additional custom activities can be added via SDKs if required.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
