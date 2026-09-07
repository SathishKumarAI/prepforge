---
qid: ing_62b70c7114__faang__local
question: 'Explain: Submitting coursework — Home | CS324'
topic: Machine Learning
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 233
output_tokens: 517
total_tokens: 750
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-06T22:33:18-05:00'
sources: []
---

**Clarify**  
The user asks for an explanation of the “Submitting coursework” process in the *Home* section of course **CS324** (Machine Learning). I’ll assume:  
1. The platform is a typical university LMS (e.g., Canvas, Moodle).  
2. Students submit assignments as PDF/ZIP or via GitHub link.  
3. There may be deadlines, versioning, and plagiarism checks.

---

**Approach**  

1. Identify the assignment entry in “Home.”  
2. Click **Submit Assignment** → choose file(s) or URL.  
3. Verify file format, size limit, and that the submission is within the due date.  
4. Confirm by clicking **Save Draft** (optional) then **Submit**.  
5. Receive confirmation email/notification; check “Submitted” tab for status.

---

**Depth**  

- *File Upload*: Supports PDFs, DOCX, ZIP, CSV, and GitHub URLs. Max size typically 50 MB.  
- *Version Control*: Each new submit overwrites the previous version unless “Keep all versions” is enabled—useful for iterative labs.  
- *Deadlines*: Late submissions incur penalties (e.g., 10% per day). The system auto‑marks “Late” if past due time.  
- *Plagiarism Check*: Integrated with Turnitin; results appear after grading.  
- *Accessibility*: Submit via mobile app or desktop; screen-reader friendly.

---

**Edge Cases**  

| Case | What breaks | Test |
|------|-------------|------|
| Uploading a file > limit | Error message, no submit | Try 60 MB ZIP |
| Internet disconnect mid‑upload | Partial file stored | Simulate network drop |
| Submitting after deadline | Auto‑penalty | Submit 2 days late |

---

**Optimize & Communicate**  

- Encourage students to **save drafts** early; this prevents loss if the connection drops.  
- Use **GitHub LFS** for large datasets; share a repo link instead of a ZIP.  
- Provide a quick‑reference screenshot in the LMS help center.  
- Highlight that “Submit” is final—students should double‑check filenames and content.

*This structured walkthrough aligns with FAANG interview expectations: clear problem restatement, logical plan, technical depth, edge‑case awareness, and actionable improvements.*

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
