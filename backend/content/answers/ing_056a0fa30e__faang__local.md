---
qid: ing_056a0fa30e__faang__local
question: 'Explain: Dependency Resolution and Loading — How Do Computer Programs Run?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 528
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:57:04-05:00'
sources: []
---

**1️⃣ Clarify**  
*Question:* “How do computer programs resolve dependencies and load code at runtime?”  
Assumptions: We’re talking about compiled binaries (C/C++/Java, etc.), not interpreted scripts; the environment has a loader and an OS that supports dynamic libraries.

**2️⃣ Approach**  
Explain the two main phases: *linking* (compile‑time) → *loading* (runtime). Break it into: static vs. dynamic linking, relocation, symbol resolution, and execution start.

**3️⃣ Depth**  
- **Static linking:** All symbols are resolved at compile time; the executable contains all code. No extra work at load time except setting up the stack frame.  
- **Dynamic linking (shared libraries):** The binary contains *undefined symbol* placeholders. At load time, the OS loader (`ld.so`/`DLL entry point`) scans these placeholders, finds matching symbols in shared objects (.so/.dll), performs *relocation* (adjusting addresses), and builds a *Global Offset Table (GOT)* or *Procedure Linkage Table (PLT)* for lazy binding.  
- **Loading steps:**  
  1. OS loads the ELF/DLL into memory, maps segments.  
  2. The dynamic loader resolves dependencies recursively (dependency graph).  
  3. Relocation entries are fixed; function pointers in GOT/PLT point to actual addresses.  
  4. Control transfers to the program’s entry point (`_start` → `main`).  

Complexity: O(N) over number of symbols; most time spent in I/O and symbol lookup, but amortized constant per call after lazy binding.

**4️⃣ Edge Cases**  
- *Circular dependencies* → loader must detect cycles.  
- *Symbol versioning* or *multiple definitions* → conflicts resolved by priority order (first‑found).  
- *Missing libraries* → program aborts with `ELF` error.  
- *Position‑Independent Code (PIC)* vs. non‑PIC: PIC allows relocation without address changes, improving security.

**5️⃣ Optimize & Communicate**  
Improvements: use *prelinking* or *symbol prebinding* to reduce runtime lookup; employ *lazy binding* only for rarely used symbols. In an interview, I’d narrate the flow as a pipeline, highlight trade‑offs (startup time vs. memory sharing), and finish with a quick diagram sketch in Markdown if allowed.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
