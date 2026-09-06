---
qid: ing_d9fa6812eb__fp__local
question: 'Explain: Installing with Kuzu Support — GitHub - getzep/graphiti: Build
  Real-Time Knowledge Graphs for AI Agents \u00b7 GitHub'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 193
output_tokens: 539
total_tokens: 732
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T23:43:14-05:00'
sources: []
---

**Why “Kuzu Support” matters for `getzep/graphiti`**

The core problem the project solves is *query‑time inference over large knowledge graphs*—you want an AI agent to answer arbitrary graph queries instantly, without pre‑computing every possible path. A naive approach stores edges in a flat table and scans them on each request; this yields \(O(E)\) latency per query. Instead, `graphiti` leverages **Kuzu**, an open‑source columnar graph database that compresses adjacency lists into bitmap indices and applies *vectorised graph analytics*. By installing with Kuzu support, you give the library a back‑end that turns every edge lookup into a constant‑time bitmap intersection rather than a full scan.

**Derivation from first principles**

1. **Information bottleneck**: Each query consumes bandwidth proportional to the number of edges examined. Compressing adjacency lists reduces the amount of data that must be streamed, satisfying the *information bottleneck* principle.
2. **Geometry of graph traversal**: Traversal is a set‑theoretic intersection of neighbor sets. Bitmaps encode these sets as dense vectors; intersecting them is a single CPU instruction, aligning with *geometric locality* in memory.
3. **Optimization objective**: Minimise latency \(L = \alpha |E| + \beta\) where \(\alpha\) is per‑edge cost. Bitmap intersection reduces \(\alpha\) to near zero; the remaining overhead \(\beta\) comes from decoding, which Kuzu handles in hardware‑accelerated kernels.

**Non‑obvious insight**

Most developers focus on *index size* when enabling Kuzu support. The deeper advantage is that Kuzu’s **columnar layout** allows the same data structure to serve both *relational queries* (SQL joins) and *graph traversals* with identical storage, eliminating duplication of indices and ensuring consistent consistency guarantees across modalities.

---

### Quick install

```bash
# Clone repo
git clone https://github.com/getzep/graphiti.git
cd graphiti

# Build from source with Kuzu support
pip install -e .[kuzu]   # or conda install -c conda-forge kuzu
```

The `kuzu` extra pulls the C++ library and Python bindings; after installation you can instantiate a `Graphiti` engine that forwards all graph operations to Kuzu’s highly optimised backend.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
