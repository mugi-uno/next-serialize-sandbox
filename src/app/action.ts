"use server";

export async function externalServerAction() {
  console.log("called externalServerAction");
  await Promise.resolve();
}
