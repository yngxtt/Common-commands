## 创建版本
    git init                        #初始化本地git仓库（创建新仓库）
    git clone git <url>             # clone远程仓库

    git config core.ignorecase false                        # 设置大小写敏感
    git config --global user.name "YOUR NAME"               # 设置用户名
    git config --global user.email "YOUR EMAIL"             # 设置邮箱

## 修改和提交
    git status                      # 查看当前版本状态（是否修改）
    git add xyz                     # 添加xyz文件至index
    git add .                       # 增加当前子目录下所有更改过的文件至index
    git commit -m 'xxx'             # 提交
    git commit --amend -m 'xxx'     # 合并上一次提交（用于反复修改）
    git commit -am 'xxx'            # 将add和commit合为一步
    git rm xxx                      # 删除index中的文件
    git rm -r *                     # 递归删除
    git rm <file>                   # 删除文件

    git rm --cached <file>          # 停止跟踪文件但不删除
    git commit --amend              # 修改最后一次提交

## 查看提交历史
    git log                         # 显示提交日志
    git log -1                      # 显示1行日志 -n为n行
    git log --stat                  # 显示提交日志及相关变动文件

## 撤销
    git reset --hard HEAD           # 将当前版本重置为HEAD（通常用于merge失败回退）
                                    # 撤消工作目录中所有未提交文件的修改内容
    git revert dfb02e6e4f2f7        # 撤销提交dfb02e6e4f2f7

## 分支与标签
    git branch <new branch>             # 创建新分支
    git branch                          # 显示本地分支
    git branch --contains 50089         # 显示包含提交50089的分支
    git branch -a                       # 显示所有分支
    git branch -r                       # 显示所有原创分支
    git branch --merged                 # 显示所有已合并到当前分支的分支
    git branch --no-merged              # 显示所有未合并到当前分支的分支
    git branch -m master master_copy    # 本地分支改名
    git branch -d BJVEP933              # 删除分支BJVEP933（本分支修改已合并到其他分支）
    git branch -D BJVEP933              # 强制删除分支BJVEP933

## 合并
    git merge <origin>                  # 合并指定分支至当前分支
    git rebase   <origin>               # 衍合指定分支至当前分支

## 远程操作
    git remote -v                       # 查看远程版本库信息
    git remote show <remote>            # 查看远程指定远程版本库信息

    git remote add <remote> <url>       # 增加远程定义
    git remote rm origin                # 删除指定的远程仓库
    

    git remote remove <remote>          # 删除指定的远程版本库
    git fetch <remote>                  # 从远程版本库获取代码
    git pull <remote> <branch>          # 下载代码及快速合并
    git push <remote> <branch>          # 上传代码及快速合并
    git push <remote> :hotfixes/BJVEP9  # 删除远程仓库的hotfixes/BJVEP9分支
    git push --tags                     # 把所有标签推送到远程仓库
