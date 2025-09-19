
## Git - Undo Things

- `git commit --amend -m"message"`
- `git restore --staged <file_name>`
- `git restore --staged .`
- `git commit -m "“"chore: add other files"`
- `git reset HEAD~1`

## Git Branch Introduction
- `git config --global init.defaultBranch main` khi khởi tạo, đặt nhánh mặc định là nhánh main
- `git branch` Xem danh sách nhánh
- `git branch <tên_branch>` Tạo nhánh mới
- `git checkout <tên_branch>` Chuyển sang nhánh khác
- `git checkout -b <tên>` Vừa tạo vừa chuyển sang nhánh mới
- `git branch -D <tên nhánh>` Xóa nhánh
- `git pull origin main` lấy code từ server về

## Git .gitignore
* Là một file cấu hình đặc biệt trong Git cho phép Git bỏ qua: mật khẩu, cache, token, ...
1. Tạo 1 folder Mat_khau chứa file muốn ignore (2 file zalo, facebook) và  1 file .enviroment
2. Tạo 1 file .gitignore
3. Trong file .gitignore 
    #### 3.1. Tạo 2 dòng Mat_khau/ và .enviroment
- `git status` Mat_khau và .enviroment sẽ bị ẩn đi
- `git status --ignored` Kiểm tra và show ra các file đang bị ignore

## Git - three states


### Git key takeaways

* Khởi tạo 
   
