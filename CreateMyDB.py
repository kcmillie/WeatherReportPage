import sqlite3

conn = sqlite3.connect('signups.db')

conn.execute('''CREATE TABLE ZIPCODES
         (ROWID INTEGER PRIMARY KEY,
         ZIPCODE        TEXT    NOT NULL,
         SIGNUP_DATE    TEXT    NOT NULL);''')
print("Done")

conn.close()

# !/usr/bin/python

# conn = sqlite3.connect('signups.db')
# # print "Opened database successfully";

# conn.execute("INSERT INTO ZIPCODES (ZIPCODE,SIGNUP_DATE) \
#       VALUES ('12345','test1')")

# conn.execute("INSERT INTO ZIPCODES (ZIPCODE,SIGNUP_DATE) \
#       VALUES ('23456','test2' )")

# conn.commit()
# print('done')
# conn.close()
