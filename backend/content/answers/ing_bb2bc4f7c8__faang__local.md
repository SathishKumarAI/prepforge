---
qid: ing_bb2bc4f7c8__faang__local
question: What Is HTTP Streaming? — What Is Critical Rendering Path? - by Neo Kim
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 239
output_tokens: 715
total_tokens: 954
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-07T01:58:01-05:00'
sources: []
---

## 1️⃣ Clarify  
**Question:** Explain *HTTP streaming* and the *critical rendering path (CRP)*.  
Assumptions:  
- Audience knows HTTP basics but not streaming specifics.  
- Wants to know how CRP ties into page performance.

## 2️⃣ Approach  
I’ll first define each concept, then illustrate with an example, compare their impact on user experience, and finish with trade‑offs.

---

### 📡 HTTP Streaming  
HTTP /1.1 *chunked transfer* or HTTP /2 multiplexing lets a server send data in pieces before the full response is ready.  

| Step | What happens |
|------|--------------|
| 1️⃣ Request | Browser asks for resource (video, audio, large JSON). |
| 2️⃣ Response | Server begins sending *chunks* as they’re generated or read from disk. |
| 3️⃣ Consumption | Client processes chunks on‑the‑fly (e.g., decode video frames). |

**Benefits:**  
- **Reduced latency** – user can start consuming before download completes.  
- **Lower memory footprint** – no need to buffer the entire file.  

**Limitations:**  
- Requires server support and a protocol that preserves order (HTTP /2 streams).  
- Not all clients handle chunked data well (legacy browsers).

---

### 🔧 Critical Rendering Path  
The sequence of steps the browser follows to turn HTML/CSS/JS into pixels on screen.

1. **HTML parsing → DOM tree**  
2. **CSSOM construction** from stylesheets  
3. **Render tree building** (DOM + CSSOM)  
4. **Layout calculation** (box positions)  
5. **Paint** (draw pixels)  
6. **Composite layers** for final frame

Optimizing the CRP reduces *First Paint* / *Time to Interactive*. Techniques: async/await scripts, defer CSS, critical‑CSS extraction, tree shaking.

---

## 3️⃣ Depth  
- **HTTP Streaming**: Uses `Transfer-Encoding: chunked` header; each chunk prefixed by its size in hex. Browsers parse headers first, then treat body as a stream (`ReadableStream`).  
- **CRP**: Browser may block rendering while parsing scripts unless marked `async/defer`. Heavy CSS or JS can stall layout and paint.

---

## 4️⃣ Edge Cases  
| Scenario | Potential Issue |
|----------|-----------------|
| Large binary file over HTTP /1.0 | No chunked transfer → full download before consumption. |
| Render‑blocking script executed after DOMContentLoaded | Delays CRP, increasing TTI. |

Testing: use DevTools Network panel to verify `Transfer-Encoding`, and Performance tab to inspect paint times.

---

## 5️⃣ Optimize & Communicate  
- **For streaming**: Prefer HTTP /2 multiplexing; fallback to chunked for older browsers.  
- **For CRP**: Inline critical CSS, defer non‑critical JS, use `preload` for high‑priority resources.

When explaining, start with the “why” (user latency), then show the mechanics, and finish by linking both concepts back to performance metrics like *Time to First Byte* and *Largest Contentful Paint*. This structured narrative satisfies FAANG interviewers’ emphasis on clarity, depth, and practical trade‑offs.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
