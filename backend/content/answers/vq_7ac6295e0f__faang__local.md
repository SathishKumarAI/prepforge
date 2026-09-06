---
qid: vq_7ac6295e0f__faang__local
question: How many blocks forms extents, extent form segments?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 234
output_tokens: 628
total_tokens: 862
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T18:18:32-05:00'
sources: []
---

**Clarify**  
We’re asked to explain the *relationship between blocks, extents, and segment formation* in a database storage engine (e.g., Oracle or PostgreSQL).  
- **Block**: smallest I/O unit on disk (often 8 KB–64 KB).  
- **Extent**: contiguous set of blocks allocated to one object.  
- **Segment**: logical container that can consist of one or more extents (tables, indexes, etc.).  

Assumptions: block size fixed; extent size is a multiple of blocks; segments grow by adding extents.

---

### Approach
1. Define the units and their hierarchy.  
2. Show how many blocks an extent contains.  
3. Explain how many extents make up a segment.  
4. Illustrate with a small numeric example.

---

### Depth

| Unit | Definition | Typical Size (blocks) |
|------|------------|-----------------------|
| **Block** | I/O page; smallest addressable unit. | 1 block = 8 KB |
| **Extent** | A contiguous sequence of blocks allocated to a single object. Commonly 32 or 64 blocks. | 32 blocks × 8 KB = 256 KB |
| **Segment** | Logical collection of extents that represents an object (table, index). | ≥1 extent; grows in multiples of extents |

- **Blocks → Extent:**  
  `extent_blocks = extent_size_in_blocks`.  
  Example: if an extent is 64 blocks, it holds 512 KB.

- **Extents → Segment:**  
  A segment starts with a *base extent* and can grow by adding *additional extents*. The number of extents is not fixed; it depends on object size.  
  `segment_size = sum(extent_blocks_i)` over all extents i in the segment.

---

### Edge Cases
- **Fragmentation:** If an extent cannot be allocated contiguously, the engine may split it into *partial extents* or use a *sub‑extent* strategy.
- **Large Objects:** Very large tables may require thousands of extents; some systems impose a maximum number per segment.
- **Block Size Variations:** Systems that support variable block sizes (e.g., PostgreSQL’s “pg_clog”) alter the calculations.

---

### Optimize & Communicate
- Use *fixed‑size extents* for predictable I/O and easier reclamation.  
- Allow *dynamic extent sizing* (small, medium, large) to balance space efficiency vs. fragmentation.  
- When explaining, start with a concrete example: “An 8 KB block, 64‑block extent = 512 KB; a segment holding a 10 MB table needs ~20 extents.”  

This structured walk‑through satisfies FAANG interview expectations: clear problem restatement, systematic plan, precise technical depth, awareness of edge conditions, and communication of optimization choices.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
