# TIMP
Technologies and methods of programming, 2021

### Laboratory work 1a
Develop a program that prohibits the creation, copying or renaming of files with specified names in the current (the one where it is located) directory (you can use file masks). The list of names or their templates should be stored in the template.tbl file as text. This file must be protected from deletion, unauthorized viewing and modification. When installing the program, you can provide for disabling it using the password stored in the first line of the template.tbl file in hashed form. The program must enable and disable the protection mode.

[Code]()

[Report]()

### Laboratory work 1b
Implement a script embedded in the HTML document code that implements copy-to-buffer protection (there is no way to select content, copy to the buffer as text or through a screenshot, etc.) and save all pages called from the current one. At the same time, printing these pages on paper should be available. Disabling the script should occur using a password stored in the body of the script in encrypted form.

[Code]()

[Report]()

### Laboratory work 2
Develop a simple program that requests the user's full name and enters this information into a text file. If such a full name is in the file, then issue a message about it. After entering the information, the program should shut down and inform the user about the limits of its use (temporary or number of launches). Upon reaching the launch limit, the program should offer the user to purchase its full version or uninstall itself. When re-installing the program, it must report its previous presence on this computer and check with past usage limits (i.e. do not allow them to exceed them in total).

The installer, the program and the uninstaller are accepted for protection (the program is registered in the system, and you know where to look at it and how to "hack" it).

Two versions of the program are running (can be combined in one):

a) Time-limited (make a time limit of no more than 3 minutes so that you can track the achievement of the limit at the time of delivery).

b) Start-limited (the limit on the number of launches should also be clear, for example – 4-5).

[Code]()

[Report]()

### Laboratory work 3a
Runs on the local operating system.

1. Create a text document (sys.tat), which will contain "System information".

2. Write an installer program sys_doc.exe for this document, which is under the guise of installing an update (displaying the update progress bar) to some program (for example, Notepad or Paint):

- Requests a folder from the user (there must be an option to use an existing folder and an option to create your own) to copy "System Information".

- Writes a file with the executable program code to the folder secur.exe (analogous to the requirements for template.tbl from laboratory work No. 1) protecting sys.tat.

- Collects (possible) information about the computer on which the program is installed.

- Encodes this information and writes it to the sys.tat file.

- Signs it with the program user's private key and writes the signature, for example, to the Windows registry in the section HKEY_CURRENT_USER\Software\Student's Last name as the value of the Signature parameter.

- Launches secur.exe to protect sys.tat from unauthorized access.

- Prescribes the launch of the program secur.exe when executing the Open function for sys.tat, so that the protection works even after the OS is rebooted (there are several ways of such "binding").

3. In the secur protection program itself.exe enable the following functionality:

- Request information from the user about the name of the registry key with an electronic digital signature (student's last name).

- Reading the signature from the above registry key, which is verified using the user's public key.

- Allowing or prohibiting viewing "System Information" in the sys.tat file, depending on whether the key is specified correctly.

4. In case of an unsuccessful check, the operation of the protected program must stop with the issuance of the corresponding message.

5. The information collected about the computer includes at least:

- User Name,

- Computer name,

- Computer configuration (memory and processor, at least) and OS version.

[Code]()

[Report]()

### Laboratory work 3b
It is executed on a local network (or virtual).

1. Create a script that remotely and imperceptibly for the user (the user opens some web page from the creator of the script) collects information about him, his computer and system (item 5 of the previous task) and writes it to some local network drive (accessible to the creator of the script) in a folder named IP or Mac addresses of the user machine.

2. Think over access to this information (you can write to a remote disk).

3. Test on 3-5 clients and get statistics about them.

After the demonstration of the installer and the script, the sources and documentation (including extended instructions for use) should be archived and sent to the mail.

The expansion of functionality and original solutions are welcome. It is recommended to run on a virtual machine.

On the protection of laboratory work:

1. The product code is shown with mandatory comments.

2. The product is shown in action with its declared functionality.

3. A report (electronic) is provided with a description of the product, its functionality and instructions for use

[Code]()
[Report]()

### Laboratory work 4
Find the secret password in the archive

[Report]()
