def login(self):
    try:
        self.Connect()
        email=self.email_txt.get()
        password=self.password.get()
        self.cur.execute("select * from login where Emailid=%s and Password=%s",(email,password))
        result=self.cur.fetchone()
        if result:
            type = result[5]
            if type == "admin":
                messagebox.showinfo("Success", "login Succesfull", parent=self.root)
                root.destroy()
                import Menuu

            else:
                root.destroy()
                import menupage
        else:
            messagebox.showerror('Error', 'Incorrect username and password', parent=self.root)
  
        cursor.close()
        db.close()

    
    except Exception as es:
        print(es)