import prisma from "../config/db.js";

export const createEmployee = async (req, res, next) => {
  const { name, email, phone, Isactive } = req.body;
  try {
    const emailExists = await prisma.employee.findUnique({
      where: {
        email: email,
      },
    });
    if (emailExists) {
      return res.json({
        status: 400,
        message: "email already exists",
      });
    }

    const user = await prisma.employee.create({
      data: {
        name,
        email,
        phone,
        Isactive,
      },
    });

    return res.json({
      status: 201,
      message: "user is created",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const getAllEmployees = async (req, res, next) => {
  const users = await prisma.employee.findMany();
  try {
    res.json({
      status: 200,
      message: "users fetched",
      data: users,
    });
  } catch (err) {
    next(err);
  }
};

export const getSingleEmployees = async (req, res, next) => {
  const userID = req.params.id;
  try {
    const user = await prisma.employee.findUnique({
      where: {
        id: Number(userID),
      },
    });
    if (!user) {
      return res.json({
        status: 400,
        message: "user is not found",
      });
    }

    return res.json({
      status: 200,
      message: "user fetched",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const updateEmployees = async (req, res, next) => {
  const userID = req.params.id;
  const { name, email, phone, Isactive } = req.body;
  try {
    const userUpdate = await prisma.employee.update({
      where: {
        id: Number(userID),
      },
      data: {
        name,
        email,
        phone,
        Isactive,
      },
    });

    if (!userUpdate) {
      return res.json({
        status: 400,
        message: "user not found",
      });
    }

    return res.json({
      status: 200,
      message: "user is updated",
      data: userUpdate,
    });
  } catch (err) {
    next(err);
  }
};

export const deleteEmployees = async (req, res, next) => {
  const userID = req.params.id;
  try {
    const user = await prisma.employee.delete({
      where: {
        id: Number(userID),
      },
    });

    return res.json({
      status: 200,
      message: "user is deleted",
    });
  } catch (err) {
    next(err);
  }
};
