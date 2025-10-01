# Key Takeaways - Lesson 5: DOM Terminology and Playwright Basics

## 1. Introduction to Automation Testing
## 2. Advanced JavaScript Functions
### Function Concepts
- **Function Expression**: 
    `const add = function(a, b) { return a + b; };`
- **Arrow Function**: 
    `const add = (a, b) => a + b;`
  - Không tham số: `() => console.log("Hello");`
  - Một tham số: `x => x * 2;`.
- **Anonymous Function**: Dùng làm callback
  - Ví dụ: `setTimeout(function() { console.log("Done"); }, 1000);`.

### Practical Examples

| **Hàm**          | **Mô tả**                  | **Ví dụ**              |
|-------------------|----------------------------|-------------------------|
| `greet(name)`    | Trả về `Hello ${name}`     | `greet("Alice")` → `Hello Alice` |
| `calculateTotal(price, quantity, discount)` | Trả về `price * quantity - discount` | `calculateTotal(10, 5, 20)` → `30` |

- **Ứng dụng**: Tính học phí cho `listStudents` hoặc `PersonRepository`.

## 3. DOM Terminology
### Basic Structure
- **DOM**: Cấu trúc cây biểu diễn HTML, giúp tương tác với trang web.
- **Thành phần**:
  - **Element**: `<option>United States</option>`.
  - **Tag**: Mở (`<option>`), đóng (`</option>`).
  - **Text**: "United States".
  - **Thuộc tính**: `value="usa"`, `school="HN"`.
  - **Thẻ tự đóng**: `<img src="image.jpg" />`, `<br/>`.

### Common Tags
| **Loại**|**Ví dụ**|
|----------------|--------------------------|
| Cấu trúc       | `<html>`, `<div>`, `<header>` |
| Nội dung       | `<h1>`, `<p>`, `<a>`, `<img>` |
| Danh sách      | `<ul>`, `<ol>`, `<li>`   |
| Form           | `<form>`, `<input>`, `<select>` |

- **Thực hành**: Vẽ cây DOM từ HTML (ví dụ: `<body><div><p>Hello</p></div></body>`).

## 4. Selectors in Automation
### Types of Selectors
- **XPath**: Linh hoạt, dùng `//` (tương đối), `/` (tuyệt đối). Ví dụ: `//button[normalize-space() = 'Add']`.
- **CSS Selector**: Ngắn gọn, hiệu suất cao. Ví dụ: `.add-button`.
- **Playwright Selector**: Dành riêng, ưu tiên. Ví dụ: `page.getByText("Add")`.

### Usage Guidelines
| **Loại**| **Ưu tiên**| **Ví dụ sử dụng**|
|--------------------|-------------|----------------------------|
| Playwright         | 1           | `page.getByRole('button')` |
| CSS                | 2           | `button.add`              |
| XPath              | 3           | `//button[@class='add']`  |

- **Lưu ý**: Dùng Playwright trước, sau đó CSS, cuối cùng XPath.

## 5. Playwright Basic Syntax
### Test Structure
- **Cấu trúc**: `test('<tên>', async ({ page }) => { ... });`.
- **Step**: `await test.step('Tên step', async () => { ... });` để chia nhỏ test case.

### Common Actions
| **Hành động**| **Cú pháp**| **Ghi chú**
|------------------|---------------------------------|------------------------
| Navigation       | `await page.goto('url');`       | Chuyển đến trang
| Locate           | `page.locator('<selector>')`    | Tìm phần tử
| Click            | `await locator.click();`        | Click đơn,`dblclick()` đôi
| Input            | `await locator.fill('text');`   | Điền text, `pressSequentially` gõ từng ký tự
| Checkbox/Radio   | `check()`, `setChecked(false)`  | Kiểm tra trạng thái
| Select           | `selectOption({ label: 'USA' })`| Chọn option trong `<select>`
| Upload           | `setInputFiles('<file-path>')`  | Tải file lên

- **Lưu ý**: Dùng `async/await` để xử lý bất đồng bộ.

