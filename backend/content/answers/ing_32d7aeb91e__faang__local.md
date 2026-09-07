---
qid: ing_32d7aeb91e__faang__local
question: 'Explain: Browse courses by subject | Pluralsight'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 487
total_tokens: 720
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T20:42:43-05:00'
sources: []
---

**Clarify**  
The interviewer asks how I would design a feature that lets users browse Pluralsight courses filtered by subject (e.g., “Data Science”, “Web Development”). Key assumptions:  
1. Subjects are hierarchical (parent → child).  
2. Users can view, search, and paginate results.  
3. The catalog is large (~10k+ courses) and updated frequently.

**Approach**  
1. **Data model** – Store courses in a relational DB with `course_id`, `title`, `subject_id`. Subjects sit in a separate table (`id`, `name`, `parent_id`).  
2. **Indexing** – Create composite index on `(subject_id, title)` to speed filtering and sorting.  
3. **API design** – Endpoint `/subjects/{id}/courses` with query params: `page`, `size`, `search`. Return paginated JSON.  
4. **Caching** – Cache popular subject lists in Redis (TTL 10 min).  

**Depth**  
- Use a B‑tree index for fast range queries; complexity O(log n + k) per page (`k` = page size).  
- For hierarchical subjects, precompute `subject_closure` table to allow retrieving all descendant IDs in one query.  
- Implement full‑text search with PostgreSQL’s `tsvector` or Elasticsearch for keyword filtering.

**Edge Cases**  
- Subjects with zero courses → return empty list but keep HTTP 200.  
- Deep nesting >5 levels – ensure closure table doesn’t explode; limit depth or use materialized path.  
- Search term that matches no course → return 404 or empty page? (Choose consistent UX).

**Optimize & Communicate**  
- If traffic spikes, shard the courses table by `subject_id`.  
- Use pagination cursors instead of offset for large datasets to avoid “skip” cost.  
- Explain trade‑offs: caching reduces DB load but adds staleness; full‑text search improves UX at cost of extra infrastructure.

By structuring the design—clarifying, planning, detailing, handling edge cases, and discussing optimizations—I demonstrate clear communication and depth expected in a FAANG interview.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
