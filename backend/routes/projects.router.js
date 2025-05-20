import upload from '../utils/multer.js';



// import express from 'express'; 
// const router = express.Router();
// import { protect, authorize } from '../middleware/auth.js';
// import Project from '../models/Project.js';

// // @route   GET api/projects
// // @desc    Get all projects
// // @access  Public
// router.get('/', async (req, res) => {
//   try {
//     const projects = await Project.find().sort({ completionDate: -1 });
//     res.json(projects);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route   GET api/projects/:id
// // @desc    Get project by ID
// // @access  Public
// router.get('/:id', async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);
    
//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     res.json(project);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind === 'ObjectId') {
//       return res.status(404).json({ message: 'Project not found' });
//     }
//     res.status(500).send('Server Error');
//   }
// });

// // @route   POST api/projects
// // @desc    Create a project
// // @access  Private/Owner
// router.post('/', protect, authorize('owner'), async (req, res) => {
//   try {
//     const newProject = new Project({
//       title: req.body.title,
//       description: req.body.description,
//       image: req.body.image,
//       completionDate: req.body.completionDate,
//       client: req.body.client,
//       technologies: req.body.technologies
//     });

//     const project = await newProject.save();
//     res.json(project);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route   PUT api/projects/:id
// // @desc    Update a project
// // @access  Private/Owner
// router.put('/:id', protect, authorize('owner'), async (req, res) => {
//   try {
//     let project = await Project.findById(req.params.id);

//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     project = await Project.findByIdAndUpdate(
//       req.params.id,
//       { 
//         $set: {
//           title: req.body.title,
//           description: req.body.description,
//           image: req.body.image,
//           completionDate: req.body.completionDate,
//           client: req.body.client,
//           technologies: req.body.technologies
//         }
//       },
//       { new: true }
//     );

//     res.json(project);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route   DELETE api/projects/:id
// // @desc    Delete a project
// // @access  Private/Owner
// router.delete('/:id', protect, authorize('owner'), async (req, res) => {
//   try {
//     const project = await Project.findById(req.params.id);

//     if (!project) {
//       return res.status(404).json({ message: 'Project not found' });
//     }

//     await project.remove();
//     res.json({ message: 'Project removed' });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// export default router;