import { createRouter, createWebHistory } from 'vue-router';

// Define the routes here. We will add placeholder routes for now.
const routes = [
  { 
    path: '/', 
    component: () => import('../views/SubjectListView.vue'), // We will need to create this view component
    name: 'subject-list'
  },
  { 
    path: '/flashcards', 
    component: () => import('../views/FlashcardListView.vue'), // Placeholder for the main app view
    name: 'flashcards'
  },
  // Add more routes here as the app grows
];

const router = createRouter({
  history: createWebHistory(), // Uses HTML5 history API (clean URLs like /flashcards)
  routes,
});

export default router;