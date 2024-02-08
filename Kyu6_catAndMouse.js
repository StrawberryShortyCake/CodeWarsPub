function catMouse(x, j) {
    let cat = x.indexOf("C")
    let mouse = x.indexOf("m")
    let dog = x.indexOf("D")

    let condition = "no"
    let reactions = {
        yes: "Caught!",
        no: "Protected!",
        ran: "Escaped!",
        absent: "boring without all three"
    }

    if (cat === -1 || mouse === -1 || dog === -1) {
        return reactions.absent
    } else if (Math.abs(cat - mouse) > (j + 1)) {
        return reactions.ran
    } else {
        condition = "yes"
    }

    if ((cat > dog && dog > mouse) || (mouse > dog && dog > cat)) {
        condition = "no"
    }

    return reactions[condition]
}