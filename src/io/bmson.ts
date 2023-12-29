import { io, schema } from '@rhythm-gaming/rgc';

export class BMSON implements io.Format<string> {
    toRGC(source: string) {
        const bmson = JSON.parse(source) as object;
        // TODO
        const {problems, data} = schema.chart(bmson);
        problems?.throw();

        if(!data) throw new Error("Failed to parse the chart!");
        return data;
    }

    fromRGC(chart: schema.Chart) {
        // TODO
        return chart.toString();
    }
}