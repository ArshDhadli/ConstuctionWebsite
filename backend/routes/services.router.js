const express = require('express');
const router = express.Router();
const { protect, authorize } = require('../middleware/auth');
const Service = require('../models/Service');

// @route   GET api/services
// @desc    Get all services
// @access  Public
router.get('/', async (req, res) => {
  try {
    const services = await Service.find().sort({ createdAt: -1 });
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/services
// @desc    Create a service
// @access  Private/Owner
router.post('/', protect, authorize('owner'), async (req, res) => {
  try {
    const newService = new Service({
      title: req.body.title,
      description: req.body.description,
      image: req.body.image
    });

    const service = await newService.save();
    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/services/:id
// @desc    Update a service
// @access  Private/Owner
router.put('/:id', protect, authorize('owner'), async (req, res) => {
  try {
    let service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    service = await Service.findByIdAndUpdate(
      req.params.id,
      { 
        $set: {
          title: req.body.title,
          description: req.body.description,
          image: req.body.image,
          updatedAt: Date.now()
        }
      },
      { new: true }
    );

    res.json(service);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/services/:id
// @desc    Delete a service
// @access  Private/Owner
router.delete('/:id', protect, authorize('owner'), async (req, res) => {
  try {
    const service = await Service.findById(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Service not found' });
    }

    await service.remove();
    res.json({ message: 'Service removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;