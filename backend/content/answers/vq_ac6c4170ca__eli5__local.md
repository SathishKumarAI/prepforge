---
qid: vq_ac6c4170ca__eli5__local
question: What built_in procedure is used to get IMAGES in Forms 4.5 ?
topic: DSA
model: openai/gpt-oss-20b
provider: lmstudio
input_tokens: 165
output_tokens: 181
total_tokens: 346
web_searches: 0
cost_usd: 0.0
generated_at: '2026-09-05T08:23:56-05:00'
sources: []
---

In Oracle Forms 4.5 the way you pull a picture that’s already in an item is just like asking a librarian for a book by its shelf number.  
The built‑in procedure is **GET_IMAGE** – it takes the name of the image item (the “shelf”) and returns the graphic data so you can display or copy it elsewhere. Think of GET_IMAGE as: *“Give me the picture stored in this field, please.”* It’s a simple call:  

```plsql
image_data := GET_IMAGE('EMP_PHOTO');  -- fetches the image from EMP_PHOTO item
```

That’s all you need to retrieve images inside Forms.

_Written by openai/gpt-oss-20b running locally. Machine-generated, not reviewed._
