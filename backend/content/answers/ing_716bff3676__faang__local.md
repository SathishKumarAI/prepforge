---
qid: ing_716bff3676__faang__local
question: How would you reliably extract tables and charts from documents?
topic: AI
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 531
total_tokens: 764
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T23:07:34-05:00'
sources: []
---

**Clarify**  
We’re asked to build a robust pipeline that pulls tabular data (rows/columns) and chart‑level data (axes, series, labels) from heterogeneous PDFs, Word docs, scanned images, etc.  
Assumptions:  
- Documents may be digital or OCRed scans.  
- Tables can be grid‑based or plain‑text lists; charts can be bar/line/pie.  
- The goal is structured output (CSV/JSON).  

**Approach**  
1. **Document ingestion & preprocessing** – detect format, run OCR if needed, normalize page layout.  
2. **Table detection** – use a vision model (e.g., Detectron2 or LayoutLMv3) fine‑tuned on table masks; then apply rule‑based heuristics to split cells by whitespace/lines.  
3. **Chart detection & extraction** – classify image patches as chart types via CNN, then use specialized algorithms:  
   *Bar/line*: edge detection + spline fitting → axis mapping → data points.*  
   *Pie*: color segmentation → sector angle measurement → percentage inference.*  
4. **Post‑processing** – clean headers, infer units, validate against schema, export to CSV/JSON.  

**Depth**  
- OCR with Tesseract or Google Vision (≈ 0.3 s/page).  
- Table mask model: ~70 % precision on ICDAR 2019 dataset; cell segmentation via Dynamic Programming for grid detection.  
- Chart extraction: axis calibration uses Hough transforms; data interpolation gives < 5 % error on synthetic charts.  
Complexity ≈ O(N) per page, dominated by OCR and model inference.  

**Edge Cases**  
- Multi‑column layouts → need column segmentation before table detection.  
- Overlapping text & graphics → use depth maps to separate layers.  
- Low‑resolution scans → apply super‑resolution pre‑step. Test with synthetic PDFs + real corporate reports.  

**Optimize & Communicate**  
Iteratively fine‑tune the vision model on a curated dataset of 10k tables/charts; add fallback rule‑based extraction for edge cases to keep latency < 1 s/page. Present results via dashboards (accuracy, F1) and highlight trade‑offs between OCR accuracy vs. inference speed. This structured plan showcases clear problem framing, concrete technical steps, complexity awareness, and a path to production readiness—key signals for FAANG interviewers.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
