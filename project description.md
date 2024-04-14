## care house

### main project idea and functions

(page 1)
- patient (button on page 1) -> (page 2.2)
	- add patient (add info about the patient to the DB (record))
		- national id (check exist) -> phase 2
		- first name -> string
		- last name -> string
		- birthDate -> date
		- registerDate -> date
		- noNurse -> boolean
		- assignedNurse - > null | nurse-id	
	- search (id,name) about patient -> (profile page) (field on page 2.2)
		- get info (page 3.2)
		- change info (page 3.2)
		- assign nurse (id)   
			-> make **noNurse** = null (page 3.2)  
			-> add to the nurse record (entry to (nurse)patients id array)
		- change nurse (id)  
			-> delete from the nurse record (entry of (nurse)patients id array)  
			-> add to the nurse record (entry to (nurse)patients id array)
	- see on the top the (how long a nurse has been unassigned) (page 2.2)
		- patient has no nurse
		- remove from assigned (nurse side)

- nurse (button on page 1) -> (page 2.1)
	- add nurse (add info about the nurse to the DB (record)) (button on page 2.1) -> (page 3.1)
		- national id (check exist) -> phase 2
		- first name -> string
		- last name -> string
		- notWorkingSince -> date (over 7 days alert)
		- patients - > empty array 
	- search (id,name) about nurse -> (profile page) (field on page 2.1)
		- get info (page 3.1)
		- assign to one or more patients (id)   
			-> make **notWorkingSince** = null (page 3.1)  
			-> add to patient record (assignedNurse)
		- change info (page 3.1)
	- see on the top nurses (how long a nurse has been unassigned) (page 2.1) showing the following
		- new nurse added has no patient
		- deleted patient (patient side)
		- remove all assigned patients from a nurse (nurse side)
		
### to do
1. intro MERN  
2. drafted the project docs  
3. setting up the app (2 day | 1/4/2024)  
	- setup node app  
	- database schema  
	- db modules (system models (system users))  
4. implement the app logic (3 day | 4/4/2024)  
	- routes  
	- implement the route logic  

cmd /c del /s /a:h desktop.ini