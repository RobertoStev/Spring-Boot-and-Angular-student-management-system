<h1> <b> Spring Boot and Angular CRUD application for managing students </b> </h1>

<p>This application enables CRUD (create, read, update, delete) operations using Spring Boot and Angular.</p>

In the following we will take a look on how this application works/

1. When we run the application on this url: http://localhost:4200/students
We can see the list of all students that are currently in my MySQL database.
For each student we have: index, first name, last name, email and actions that we can perform on each student

![Screenshot 2024-02-12 084013](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/510f0ffe-0aeb-4686-8f4d-120a52acf67d)

2. By clicking on 'Add Student' (top left link) we will be redirected to http://localhost:4200/create-student
   This will open a for in each we can add new student by entering all the date for the new student. We can not submit the form until we provde the falid data for each input

   ![Screenshot 2024-02-12 084027](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/7a38e140-9fe6-43b5-85d2-13d9f51f7fc1)

When no valida data for the inputs is provided the user will get a error message for filed that does not satisfyies the input, this are all the error messages that can be providede to the user

![Screenshot 2024-02-12 084041](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/e5229b2c-1b30-431c-a8fc-f8d9eac246ce)

3. For each student in the student list in Actions column we have button Update. When click on it we will be redirected to this url http://localhost:4200/update-student/{id}
   id is the Path/URL parameter and represents the id of the student for whom we have clicked the Update button.

   When we get redirected to the update url we will we a prepopulated for with the date for the sutdent with the id that we have send. Here is an example how that looks when we click the Update button for student with id 1

   ![Screenshot 2024-02-12 084058](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/1c424208-6841-4e21-8a50-fbc94a1d6c0d)
