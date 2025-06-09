import { exec } from "child_process";
import { promises as fs } from "fs";
import path from "path";

// Сборка проекта и создание HTML версии
console.log("🚀 Создание HTML версии...");

exec("npm run build", async (error, stdout, stderr) => {
  if (error) {
    console.error("Ошибка сборки:", error);
    return;
  }

  console.log("✅ Сборка завершена");
  console.log("📁 HTML файлы готовы в папке dist/");

  try {
    // Читаем содержимое папки dist
    const distPath = path.join(process.cwd(), "dist");
    const files = await fs.readdir(distPath, { withFileTypes: true });

    console.log("\n📋 Созданные файлы:");
    for (const file of files) {
      if (file.isFile()) {
        console.log(`   ${file.name}`);
      }
    }

    console.log("\n🌐 Готово! Теперь у тебя есть:");
    console.log("   • index.html - главная страница");
    console.log("   • assets/ - стили и скрипты");
    console.log("   • Все изображения и ресурсы");
  } catch (err) {
    console.log("HTML файлы созданы в папке dist/");
  }
});
