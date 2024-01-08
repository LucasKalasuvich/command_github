# Command
command

A. Lokasi Repository
lokasi repositori dibedakan menjadi Remote Repository dan Local Repository.

- Remote Repository adalah tempat penyimpanan yang berpusat di server, di luar PC setiap developer, atau tempat penyimpanan bersama.

- Local Repository adalah tempat penyimpanan yang berpusat di PC setiap developer (Local Machine). Local Repository digunakan untuk membandingkan progress pekerjaan antara Remote dan Local.

B. Macam-macam dari Repository dan Version Control dibagi menjadi 2 macam kategori, yaitu Centralized dan Decentralized Source Control.

- Centralized source control adalah: Source control dimana repositorynya menyimpan version dari project di dalam Remote Repository. 

- Decentralized atau Distributed source control adalah: Source control dimana repositorynya menyimpan version dari project di dalam Local Repository dan Remote Repository.

//===========================================================================================================

C. Bash Command

//Untuk menunjukan dan mem-print working directory di posisi saat ini:

$pwd

//Untuk membersihkan layar terminal bash:

$clear

//Untuk membuat directory / folder baru

$mkdir directory-name

//Untuk membuat directory / folder baru

$rmdir directory-name

//Untuk pindah ke directory lain

(Note: tulis relative path untuk pindah ke directory lain.)

$cdir directory-name/sub-directory

//Untuk membuat file

$cat > file-one.txt

//Untuk menghapus files

$rm file-one.txt

//Untuk menghapus directories beserta seluruh filesnya

$rm -r directory-name

//Untuk print seluruh directories dan files pada satu level di bawah directory yang terpilih

$ls

//Untuk print seluruh directories, subdirectories dan files di dalamnya:

$ls -R

//Untuk print seluruh isi dari directory terpilih

$ls directory-name

//Untuk mendapatkan detail metadata dari directory dan files:

$ls -all

//Untuk meng-copy files ke dalam satu tujuan directory

$cp file-name.txt directory-name

//git config

git config untuk mengatur konfigurasi sesuai keinginan pengguna seperti email, format file dll.

contoh: 

git config --global user.email lucaskalasuvich@gmail.com

//git init

git init untuk membuat repositori baru

contoh:

git init

//git add

untuk menambahkan file ke index

contoh:

git add temp.txt

//git clone

untuk checkout repositori. Jika repositori berada di remove server.

contoh:

git clone lucaskalasuvich@93.188.160.58:/path/to/repository

Jika salinan repositori lokal ingin dibuat.

contoh:

git clone /path/to/repository

//git commit

untuk melakukan commit pada perubahan ke head. Ingat bahwa perubahan apapun yang di-commit tidak akan langsung ke remote repository.

contoh:

git commit –m “Isi dengan keterangan untuk commit”

//git status

untuk menampilkan data file yang ingin dirubah bersama file yang ingin di commit.

contoh:

git status

//git push

Push akan mengirimkan perubahan ke master branch dari remote repository yang berhubungan dengan direktori.

contoh:

git push origin master

//git checkout

//untuk membuat branch atau untuk berpindah diantaranya.

contoh:

command git checkout -b <nama-branch>

//untuk berpindah dari branch satu ke lainnya.

contoh:

git checkout <branch-name>

//Untuk check versi dan memeriksa apakah git sudah benar terinstall di dalam system anda:

$git version

//Untuk set global configuration untuk user pada git:

$git config --global user.name “Username”

//Untuk setl global configuration untuk email pada git:

$git config --global user.email “my.email@gmail.com”

//Untuk melihat seluruh value dari global config:

(Note: di sini kita bisa melihat global configuration tidak hanya username dan
email)

$git config --global --list

//Untuk melihat satu global configuration, misalnya user namenya:

$git config user.name

//Untuk mendapatkan pertolongan terhadap perintah-perintah git:

$git help

//Untuk mendapatkan manual page help terhadap satu perintah

$git help config

$git help add atau $git config --help

//Untuk set git configuration agar menggunakan notepad++ sebagai default editor:

git config --global core.editor "notepad++"

//Untuk mengubah git configuration dengan menggunakan notepad

(Note: Menghapus .git configuration, artinya membuat project ini gak di manage
git lagi)

$notepad++ ~/.gitconfig

//Gunakan command ini bila kalian ingin silence feature safety directory yang
menghalangi applikasi seperti gitkraken atau sourcetree untuk mengakses git
anda: (Warning: tanyakan dahulu pihak compliance sebelum menggunakan ini)

git config --global --add safe.directory '*'

//Untuk menambahkan branch baru, gunakan command:

(Note: concept branch baru bisa diterapkan setelah initial commit atau root
commit, karena yang di branch sebenarnya adalah repository, baik local maupun
remote)

$git branch newBranch

//Untuk melihat seluruh branch yang ada sekarang, baik yang berada di dalam local
repository maupun yang berada di dalam remote repository:

$git branch -a

$git branch --all

//Untuk melihat seluruh branch yang hanya ada di dalam local repository:

$git branch -l

$git branch --list

//untuk melihat seluruh branch yang hanya berada di dalam remote repository:

$git branch -r

$git branch --remotes

//Untuk switch dan pindah ke branch lain, gunakan command.

$git checkout destinationBranch

//Untuk switch dan pindah ke branch lain, sekaligus membuat branch barunya:

$git checkout -b newBranch

Cara me-rename local branch bersamaan dengan history reference log dan
configurationnya:

$git branch -m oldBranchName newBranchName

$git branch --move oldBranchName newBranchName

//Untuk push seluruh branch yang ada ke remote repository:

git push --all myRemoteRepo

//Untuk menghapus satu local branch, gunakan command:

(Note: jangan menghapus branch di saat anda saat ini berada di branch tersebut)

$git branch -d branchName

$git branch --delete branchName

Branch bisa memiliki kondisi:
1. Kosong, belum ada commit sama sekali
2. Sudah memiliki jalur commit dan belum merge (merge akan diajarkan di section berikutnya)
3. Sudah di merge ke branch utama dan menjadi history

//Menghapus branch apabila belum dimerge (Kondisi nomor 2) akan mendapatkan

warning, karena menghapus branch yang belum di gabung akan berakibat
kehilangan seluruh branch dan datanya. Tapi apabila ingin force delete, gunakan
capital D untuk menghapusnya:

$git branch -D branchName

(Note: Sekali lagi peringatan, melakukan ini akan kehilangan seluruh progress
branch, dan pastikan ini memang yang diinginkan)

//Untuk menghapus satu remote branch, gunakan command:

$git push myRemoteRepo -d branchName

$git push myRemoteRepo --delete branchName

//Untuk melakukan perbandingan antara 2 branch, kita juga bisa menggunakan diff dan difftool:

$git diff branch1 branch2

$git difftool branch1 branch2