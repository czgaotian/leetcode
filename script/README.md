# How to Use This
#### 安装`requeset`库
```
pip install requests 
```
#### 修改配置项
```
class Config:
    １．　本地仓库的的路径
    local_path = 'C:/Users/admin/Desktop/leedcode'
    ２．　github中的仓库leetcode解法的路径
    github_leetcode_url = 'https://github.com/czgaotian/leetcode/blob/master/leetcode-algorithms/'
```
#### 运行
```
python readme.py
```
更新就把对应题目的解答放到相对于文件夹下面，然后运行该脚本