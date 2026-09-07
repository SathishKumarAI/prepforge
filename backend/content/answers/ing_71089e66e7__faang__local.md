---
qid: ing_71089e66e7__faang__local
question: 'Explain: Images MetaData - DB Schema — Socialnetworkfacebookinstagram'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 236
output_tokens: 568
total_tokens: 804
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:06:49-05:00'
sources: []
---

**Clarify**  
The interviewer asks for a relational schema that stores image metadata for a social‑media platform (think Facebook/Instagram).  
Assumptions: *Images belong to posts; users own posts; we need upload time, size, format, tags, privacy flags, and audit fields.*  

**Approach**  
1. Identify core entities: **User**, **Post**, **Image**.  
2. Add auxiliary tables for many‑to‑many relationships (tags, likes).  
3. Use surrogate keys, enforce referential integrity, and add indexes on frequently queried columns.  

**Depth**  
```sql
-- Core tables
CREATE TABLE users (
  user_id BIGINT PRIMARY KEY,
  username VARCHAR(50) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT now()
);

CREATE TABLE posts (
  post_id BIGINT PRIMARY KEY,
  author_id BIGINT REFERENCES users(user_id),
  caption TEXT,
  privacy INT,          -- enum: PUBLIC=0, FRIENDS=1, PRIVATE=2
  created_at TIMESTAMP DEFAULT now(),
  updated_at TIMESTAMP DEFAULT now()
);

-- Image metadata
CREATE TABLE images (
  image_id BIGINT PRIMARY KEY,
  post_id BIGINT REFERENCES posts(post_id),
  url TEXT NOT NULL,
  format VARCHAR(10),   -- e.g., jpg, png, gif
  width INT, height INT,
  size_bytes BIGINT,
  uploaded_at TIMESTAMP DEFAULT now(),
  is_profile_pic BOOLEAN DEFAULT false
);

-- Tags (many‑to‑many)
CREATE TABLE tags (
  tag_id BIGINT PRIMARY KEY,
  name VARCHAR(30) UNIQUE NOT NULL
);
CREATE TABLE image_tags (
  image_id BIGINT REFERENCES images(image_id),
  tag_id BIGINT REFERENCES tags(tag_id),
  PRIMARY KEY (image_id, tag_id)
);

-- Indexes for common queries
CREATE INDEX idx_images_post ON images(post_id);
CREATE INDEX idx_image_tags_tag ON image_tags(tag_id);
```
**Edge Cases**  
- Image deletions: cascade or soft‑delete?  
- Privacy enforcement: query joins with `posts.privacy`.  
- Large media files → consider storing only metadata in DB, actual blobs in object store.  

**Optimize & Communicate**  
- Use partitioning on `uploaded_at` for time‑range scans.  
- Add a materialized view for “popular images” (likes + views).  
- Explain trade‑offs: relational vs. NoSQL for high‑velocity tag lookups; caching image URLs to reduce DB hits.  

This schema balances normalization, query performance, and scalability for a high‑traffic social network.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
