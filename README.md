# Duremere Landing Page

A modern, responsive landing page built using **Next.js**, **TypeScript**, and **Tailwind CSS**, based on a provided **Figma design**.  
This project is part of my **frontend learning journey**, focusing on **converting Figma designs into clean, reusable, and production-ready code**.

This work is developed during my training at **360XpertSolutions** as a **Full-Stack Development Trainee**.

---

## 🚀 Project Overview

The goal of this project is to:
- Translate a real-world Figma design into code
- Follow a **component-based architecture**
- Maintain **design consistency**, spacing, and typography
- Use **reusable UI components** and structured data
- Practice professional frontend development workflows

---

## 🎨 Figma Design

- **Design Link:**  
  https://www.figma.com/design/aA7VrobNh37S6HnU3jbMa3/Duremere?node-id=3-4&t=kd96hggYoK6T6n2o-0

The implementation closely follows the original design in terms of:
- Layout
- Typography
- Colors
- Spacing
- Visual hierarchy

---

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Design Tool:** Figma

---

## 📁 Project Structure

The project follows a **clean and scalable folder structure**:

```txt
src/
├── app/
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Landing page
│   └── globals.css       # Global styles & CSS variables
│
├── components/
│   ├── ui/               # shadcn/ui components
│   ├── shared/           # Reusable shared components
│   └── csv/              # Page-specific components
│
├── data/
│   └── mockdata.ts       # Centralized landing page content
│
├── assets/
│   ├── images/           # Images used in the project
│   └── fonts/            # Custom fonts (Helvetica Neue)
│
└── lib/
    └── utils.ts
    
