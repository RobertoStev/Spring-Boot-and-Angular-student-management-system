<h1> <b> Spring Boot and Angular CRUD application for managing students </b> </h1>

<p>This application supports CRUD (Create, Read, Update, Delete) operations using Spring Boot and Angular.</p>

<p>Now, let's explore how this application works. </p>

<p> When we access the application at the following URL: http://localhost:4200/students, a list of all students currently present in my MySQL database is displayed <br>
Each student entry includes an index, first name, last name, email, and corresponding actions that can be performed on each student. </p>

![Screenshot 2024-02-12 084013](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/510f0ffe-0aeb-4686-8f4d-120a52acf67d)

<p> Clicking on 'Add Student' (the top-left link) redirects us to http://localhost:4200/create-student <br>
This opens a form where we can add a new student by providing data for each field. The Submit button is disabled until valid data is provided for each input field. </p>

![Screenshot 2024-02-12 084027](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/7a38e140-9fe6-43b5-85d2-13d9f51f7fc1)

<p> When no valid data is provided for an input field, the user will receive an error message. The following are all the error messages that can be presented to the user. </p>

![Screenshot 2024-02-12 084041](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/e5229b2c-1b30-431c-a8fc-f8d9eac246ce)

<p> For each student in the student list, there is an 'Update' button in the Actions column. When clicked, we will be redirected to the following URL: http://localhost:4200/update-student/{id} <br>
The '{id}' is a path/URL parameter representing the unique identifier of the student for whom the 'Update' button was clicked.

<p> When we get redirected to the update URL, we will see a prepopulated form with the data for the student with the ID that we have sent. Here is an example of how it looks when we click the 'Update' button for the student with ID 1. </p>

![Screenshot 2024-02-12 084058](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/1c424208-6841-4e21-8a50-fbc94a1d6c0d)

<p> From this form, we can update the data for the student. By clicking on the Submit button, these changes will apply to that student. </p>

<p> In the student list, there is a 'Details' button. Clicking on it redirects us to http://localhost:4200/student-details/{id}, where we can view details about the student. Here's an example.</p>

![Screenshot 2024-02-12 084111](https://github.com/RobertoStev/Spring-Boot-and-Angular-student-management-system/assets/65564783/a0bce109-8790-463a-a480-5b2d07b27f11)

<p> The last button that we have in our student list is 'Delete'. By clicking on it, we will delete a student. </p>
