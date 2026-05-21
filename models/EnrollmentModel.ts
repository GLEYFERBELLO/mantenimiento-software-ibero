import mongoose, { Schema, models } from "mongoose";

const EnrollmentSchema = new Schema(
  {
    courseId: {
      type: String,
      required: true,
    },
    courseTitle: {
      type: String,
      required: true,
    },
    studentName: {
      type: String,
      default: "Estudiante invitado",
    },
    studentEmail: {
      type: String,
      default: "invitado@demo.com",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed"],
      default: "confirmed",
    },
  },
  {
    timestamps: true,
  }
);

const EnrollmentModel =
  models.Enrollment || mongoose.model("Enrollment", EnrollmentSchema);

export default EnrollmentModel;