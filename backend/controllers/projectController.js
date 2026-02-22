const Project = require('../models/Project');

const getProjects = async (req, res) => {
    try {
        const projects = await Project.find({}).sort({ createdAt: -1 });
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createProject = async (req, res) => {
    const { title, description, image, techStack, githubLink, liveLink, category, isFeatured } = req.body;
    try {
        const project = new Project({ title, description, image, techStack, githubLink, liveLink, category, isFeatured });
        const createdProject = await project.save();
        res.status(201).json(createdProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateProject = async (req, res) => {
    const { title, description, image, techStack, githubLink, liveLink, category, isFeatured } = req.body;
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            project.title = title || project.title;
            project.description = description || project.description;
            project.image = image || project.image;
            project.techStack = techStack || project.techStack;
            project.githubLink = githubLink || project.githubLink;
            project.liveLink = liveLink || project.liveLink;
            project.category = category || project.category;
            project.isFeatured = isFeatured !== undefined ? isFeatured : project.isFeatured;

            const updatedProject = await project.save();
            res.json(updatedProject);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (project) {
            await project.deleteOne();
            res.json({ message: 'Project removed' });
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getProjects, createProject, updateProject, deleteProject };
