---
qid: ing_056a0fa30e__fp__local
question: 'Explain: Dependency Resolution and Loading — How Do Computer Programs Run?'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 173
output_tokens: 578
total_tokens: 751
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T16:17:05-05:00'
sources: []
---

### From “What must run?” to *dependency resolution*

A program is a **function** `f` that transforms input data into output.  
For the function to exist in memory it needs every sub‑function it calls, every
data structure it instantiates, and any external resource (files, sockets,
GPU kernels). The core problem is: **how do we assemble all these pieces so that
`f` can be evaluated efficiently?**

#### 1. Static vs. dynamic view  
*Static*: at compile time the compiler builds a call graph—nodes are functions,
edges are calls. It must guarantee that each edge points to an existing node.
If a node is missing, compilation fails: the program cannot run.

*Dynamic*: at load/run time the operating system (OS) resolves symbols in shared
libraries (`*.so`, `*.dll`). The loader consults the dynamic linker’s symbol table,
locates the address of each referenced function or variable, and patches the
call site. If a required library is absent, the process aborts.

#### 2. Why *symbol resolution* works  
The OS maintains a **global namespace** (or per‑process namespace) that maps
human‑readable names to memory addresses. The loader builds an **intermediate
representation** of the program’s binary: relocation entries point from call sites
to symbol names. By performing a single linear scan and hash lookups, it
achieves `O(n)` resolution time—optimal given that each symbol must be examined.

#### 3. Deeper principle: *modularity as compositionality*  
Dependency resolution is an instance of **functional composition**: each module
is a pure function with declared inputs/outputs. The loader enforces the contract
between modules, ensuring that the composed program remains well‑typed (in a
runtime sense). This mirrors type theory’s guarantee that if every component
type‑checks, the whole program type‑checks.

#### 4. Non‑obvious insight  
Most people think “libraries are just files”; in fact, **linkers treat them as
containers of *polymorphic* symbols**—a single symbol can be bound to different
implementations (e.g., OpenBLAS vs. Intel MKL) without changing the program.
This indirection allows runtime *policy selection*: a machine learning model can
swap out a GPU kernel for a CPU one simply by loading a different shared library,
all while keeping the high‑level code unchanged. This is why frameworks like
TensorFlow or PyTorch support plug‑in backends: they exploit dependency resolution
to provide *extensible* optimization without recompilation.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
