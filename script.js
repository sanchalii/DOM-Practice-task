 const data= [
    {
        "id": 1,
        "name": "John Doe",
        "image": "https://media.istockphoto.com/id/1562983249/photo/portrait-of-happy-and-successful-businessman-indian-man-smiling-and-looking-at-camera.webp?b=1&s=170667a&w=0&k=20&c=z2tuWSfqvWQvucbL9nyjgHXIFvWqwE1CxwI7OoSk3sk=",
        "description": "A software engineer with 5 years of experience in web development."
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "image": "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A graphic designer who specializes in branding and illustration."
    },
    {
        "id": 3,
        "name": "Alice Johnson",
        "image": "https://images.unsplash.com/photo-1482961674540-0b0e8363a005?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A project manager with a passion for agile methodologies."
    },
    {
        "id": 4,
        "name": "Bob Brown",
        "image": "https://images.unsplash.com/photo-1595347097560-69238724e7bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbnxlbnwwfHwwfHx8MA%3D%3D",
        "description": "A data analyst with expertise in big data and machine learning."
    },
    {
        "id": 5,
        "name": "Carol White",
        "image": "https://media.istockphoto.com/id/1167770705/photo/young-indian-man-wearing-orange-sweater-over-isolated-white-background-approving-doing.webp?b=1&s=170667a&w=0&k=20&c=Qm92okavAxSUfDCrPWc5GyFFgwRSHk90x9yP5E4JMdc=",
        "description": "A content writer with a knack for creating engaging blog posts."
    }
] 
let boxes=document.querySelectorAll(".box")
boxes.forEach((box,index)=>{
    let image=document.createElement("img")
    image.src=data[index].image;
    box.append(image)
    

    let name=document.createElement("h2")
    name.innerHTML=data[index].name
    box.append(name)



    let description=document.createElement("p")
    description.innerHTML=data[index].description
    box.append(description)


    box.classList.add("design");



})