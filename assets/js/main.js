async function loadFiles() {
  const licensesGrid = document.getElementById('licenses-grid');
  const sponsorsGrid = document.getElementById('sponsors-grid');

  try {
    const res = await fetch('data/files.json', { cache: 'no-store' });
    const data = await res.json();

    renderLicenses(data.licenses || [], licensesGrid);
    renderSponsors(data.sponsors || [], sponsorsGrid);
  } catch (err) {
    licensesGrid.innerHTML = '<p class="empty-state">تعذّر تحميل الملفات حاليًا، حاول تحديث الصفحة.</p>';
    sponsorsGrid.innerHTML = '<p class="empty-state">تعذّر تحميل الشعارات حاليًا، حاول تحديث الصفحة.</p>';
    console.error(err);
  }
}

function extLabel(path) {
  const ext = (path.split('.').pop() || '').toUpperCase();
  return ext.length <= 4 ? ext : 'ملف';
}

function renderLicenses(items, container) {
  if (!items.length) {
    container.innerHTML = '<p class="empty-state">لا توجد ملفات مضافة بعد. يمكن إضافتها من لوحة التحكم.</p>';
    return;
  }
  container.innerHTML = items.map(item => `
    <article class="file-card">
      <span class="file-icon">${extLabel(item.file)}</span>
      <h3 class="file-name">${item.title}</h3>
      ${item.description ? `<p class="file-meta">${item.description}</p>` : ''}
      <a class="file-download" href="${item.file}" download>تحميل الملف</a>
    </article>
  `).join('');
}

function renderSponsors(items, container) {
  if (!items.length) {
    container.innerHTML = '<p class="empty-state">لا توجد شعارات مضافة بعد. يمكن إضافتها من لوحة التحكم.</p>';
    return;
  }
  container.innerHTML = items.map(item => `
    <article class="logo-card">
      <img src="${item.logo}" alt="${item.name}" loading="lazy">
      <h3 class="file-name">${item.name}</h3>
      <a class="file-download" href="${item.logo}" download>تحميل الشعار</a>
    </article>
  `).join('');
}

loadFiles();
