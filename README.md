# 101477407 Lab Test 2 | COMP 3133

This Angular application displays a list of **SpaceX missions** using the SpaceX public REST API. You can view mission details, filter by launch year, and explore external links to each mission.

## Features

✅ View all SpaceX missions  
✅ Filter missions by launch year  
✅ View mission details  
✅ Responsive UI using Angular Material  
✅ Deployed on Vercel

---

## 📁 Project Structure

- `missionlist` - Displays a list of launches
- `missiondetails` - Displays full details for a selected launch
- `spacex.service.ts` - Communicates with the SpaceX API
- `missionfilter` - Dropdown filter for launch year

---

## 🔧 Running the App Locally

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/101477407-lab-test2-comp3133.git
cd 101477407-lab-test2-comp3133
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
ng serve
```

Visit `http://localhost:4200/` in your browser.

---

## 🚀 Deployment

This app is deployed using **Vercel**.

### Vercel Steps:
1. Push your code to a GitHub repository
2. Visit [vercel.com](https://vercel.com)
3. Import the GitHub repository
4. Set the build command: `npm run build`
5. Set the output directory: `dist/101477407-lab-test2-comp3133/browser`
6. Deploy!

---

## 🌐 SpaceX API Endpoints Used

- `GET https://api.spacexdata.com/v3/launches` – All launches
- `GET https://api.spacexdata.com/v3/launches?launch_year=2019` – Filter by year
- `GET https://api.spacexdata.com/v3/launches/:id` – Details for a specific launch

---

## 📦 Technologies Used

- Angular
- Angular Material
- TypeScript
- RxJS
- Vercel (for deployment)

---

## 👨‍💻 Author

**Akorede Daniel Osunkoya**  
Student ID: 101477407  
COMP 3133 – Lab Test 2

---

## 📝 License

This project is for educational purposes.
