# موارد جمعية صقيل | Saqeel Resources

موقع ويب ثابت (Static Website) يجمع ملفات جمعية صقيل لتنمية الشباب في بوابة واحدة، مع لوحة تحكم لإدارة المحتوى عبر Decap CMS.

## نظرة عامة

يوفر الموقع صفحة رئيسية للتنقل إلى أقسام الموارد التالية:

- **بيانات الجمعية** (`data.html`): عرض ملفات الجمعية الرسمية.
- **الهوية البصرية** (`identity.html`): عرض ملفات الشعارات والهوية.
- **المشاريع** (`projects.html`): عرض المشاريع مع ملفات كل مشروع داخل أقسام قابلة للطي.
- **حسابات التواصل** (`social-media.html`): روابط الحسابات الرسمية مع خاصية النسخ السريع.

## التقنيات المستخدمة

- **Frontend:** HTML + CSS + JavaScript (Vanilla)
- **إدارة المحتوى:** Decap CMS
- **المصادقة والإدارة:** Netlify Identity + Git Gateway
- **الاستضافة والنشر:** GitHub + Netlify

## إدارة البيانات

تعتمد الصفحات الديناميكية على ملفات JSON داخل مجلد `data/`:

- `data/association.json` لملفات بيانات الجمعية (`files_list`)
- `data/identity.json` لملفات الهوية البصرية (`files_list`)
- `data/projects.json` لقائمة المشاريع (`projects_list` و `project_files`)

> ملاحظة: يوجد ملف `data/files.json` وسكربت `assets/js/main.js` كهيكل سابق، بينما الصفحات الحالية تعتمد فعلياً على الملفات الثلاثة أعلاه.

## لوحة التحكم (CMS)

- المسار: `admin/`
- الإعدادات: `admin/config.yml`
- الفرع المستخدم في الإعدادات حالياً: `master`

من خلال لوحة التحكم يمكن رفع الملفات وتحديث المحتوى، ويتم حفظ التعديلات مباشرة في المستودع.

## هيكل المشروع

```text
saqeel-resources/
├── admin/
│   ├── index.html
│   └── config.yml
├── assets/
│   ├── css/
│   ├── img/
│   ├── js/
│   └── uploads/
├── data/
│   ├── association.json
│   ├── identity.json
│   ├── projects.json
│   └── files.json
├── index.html
├── data.html
├── identity.html
├── projects.html
└── social-media.html
```

## التشغيل المحلي

لا يحتاج المشروع إلى Build step:

1. استنسخ المستودع
2. افتح المجلد في المحرر
3. شغّل أي Local Server (مثل Live Server)

## النشر

يتم النشر عبر Netlify. أي تحديث على الفرع المرتبط بالإعدادات يتم نشره تلقائياً.
